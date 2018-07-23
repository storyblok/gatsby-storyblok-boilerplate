import React from 'react';
import Components from '../components/components.js';
import SbEditable from 'storyblok-react'
import config from '../../gatsby-config'

const loadStoryblokBridge = function(cb) {
  let sbConfigs = config.plugins.filter((item) => {
    return item.resolve == 'gatsby-source-storyblok'
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

  location.search
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
    this.state = {story: null}
  }

  componentDidMount() {
    loadStoryblokBridge(() => { this.initStoryblokEvents() })
  }

  loadStory(payload) {
    storyblok.get({
      slug: payload.storyId, 
      version: 'draft'
    }, (data) => {
      this.setState({story: data.story})
    })
  }

  initStoryblokEvents() {
    this.loadStory({storyId: getParam('path')})

    storyblok.on(['change', 'published'], (payload) => {
      this.loadStory(payload)
    })

    storyblok.on('input', (payload) => {
      if (this.state.story && payload.story.id === this.state.story.id) {
        this.setState({story: payload.story})
      }
    })

    storyblok.pingEditor(() => {
      if (storyblok.inEditor) {
        storyblok.enterEditmode()
      }
    })
  }

  render() {
    if (this.state.story == null) {
      return (<div></div>)
    }

    let content = this.state.story.content

    return (
      <SbEditable content={content}>
      <div>
        {React.createElement(Components[content.component], {key: content._uid, blok: content})}
      </div>
      </SbEditable>
    )
  }
}

export default StoryblokEntry
