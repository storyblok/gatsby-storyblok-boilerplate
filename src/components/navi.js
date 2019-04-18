import React from 'react'
import Components from './components.js';

const Navi = (props) => (
  <div className="navi">
    {props.blok.nav_items && props.blok.nav_items.map((blok) => React.createElement(Components[blok.component], {key: blok._uid, blok: blok}))}
  </div>
)

export default Navi