import React from 'react'
import Components from './components.js';

const Page = (props) => (
  <div>
    {props.blok.body && props.blok.body.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
  </div>
)

export default Page