import React from 'react'
import Components from './components.js';

const Navi = (props) => (
  <nav className="navbar navbar-expand navbar-light bg-light">
    <span className="navbar-brand">Navi</span>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {props.blok.nav_items && props.blok.nav_items.map((blok) => React.createElement(Components(blok.component), {key: blok._uid, blok: blok}))}
      </ul>
    </div>
  </nav>
)

export default Navi