import React from 'react'
import Components from '../components/components.js'

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    let story = Object.assign({}, props.pathContext.story)
    story.content = JSON.parse(story.content)
    this.state = {story: story}
  }

  render() {
    let content = this.state.story.content

    return (
      <div>
        {React.createElement(Components[content.component], {key: content._uid, blok: content})}
      </div>
    )
  }
}

export default StoryblokEntry
