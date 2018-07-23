import React from 'react'
import Components from './components.js';
import SbEditable from 'storyblok-react'

const Grid = (props) => (
  <SbEditable content={props.blok}>
    <div className="container">
      <div className="row">
        {props.blok.columns.map((blok) =>
          React.createElement(Components[blok.component], {key: blok._uid, blok: blok})
        )}
      </div>
    </div>
  </SbEditable>
)

export default Grid
