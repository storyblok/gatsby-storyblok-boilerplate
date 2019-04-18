import React from 'react'
import Components from '../components/components.js'
import SbEditable from 'storyblok-react'
import config from '../../gatsby-config'
import Navi from '../components/navi.js'

const loadStoryblokBridge = function(cb) {
  let sbConfigs = config.plugins.filter((item) => {
    return item.resolve === 'gatsby-source-storyblok'
  })
  let sbConfig = sbConfigs.length > 0 ? sbConfigs[0] : {}
  let script = document.createElement('script')
  script.type = 'text/javascript'
  script.src = `//app.storyblok.com/f/storyblok-latest.js?t=${sbConfig.options.accessToken}`
  script.onload = cb
  document.getElementsByTagName('head')[0].appendChild(script)
}

const getParam = function(val) {
  var result = ''
  var tmp = []

  window.location.search
    .substr(1)
    .split('&')
    .forEach(function (item) {
      tmp = item.split('=')
      if (tmp[0] === val) {
        result = decodeURIComponent(tmp[1])
      }
    })

  return result
}

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    this.state = {story: null, globalNavi: {content: {}}}
  }

  componentDidMount() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
  }

  loadStory(payload) {
    window.storyblok.get({
      slug: payload.storyId, 
      version: 'draft'
    }, (data) => {
      this.setState({story: data.story})
    })
  }

  loadGlovalNavi() {
    window.storyblok.get({
      slug: 'global-navi', 
      version: 'draft'
    }, (data) => {
      this.setState({globalNavi: data.story})
    })
  }

  initStoryblokEvents() {
    this.loadStory({storyId: getParam('path')})
    this.loadGlovalNavi()

    let sb = window.storyblok

    sb.on(['change', 'published'], (payload) => {
      this.loadStory(payload)
    })

    sb.on('input', (payload) => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        payload.story.content = sb.addComments(payload.story.content, payload.story.id)
        this.setState({story: payload.story})
      }
    })

    sb.pingEditor(() => {
      if (sb.inEditor) {
        sb.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return (<div></div>)
    }

    let content = this.state.story.content
    let globalNavi = this.state.globalNavi.content

    return (
      <SbEditable content={content}>
      <div>
        <Navi blok={globalNavi}></Navi>
        {Components[content.component] ? React.createElement(Components[content.component], {key: content._uid, blok: content}) : `Component ${content.component} not created yet`}
      </div>
      </SbEditable>
    )
  }
}

export default StoryblokEntry
