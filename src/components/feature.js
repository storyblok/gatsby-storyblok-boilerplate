import React from 'react'
import SbEditable from 'storyblok-react'

const Feature = (props) => (
  <SbEditable content={props.blok}>
    <div className="col-4">
      <h2>{props.blok.name}</h2>
    </div>
  </SbEditable>
)

export default Feature
