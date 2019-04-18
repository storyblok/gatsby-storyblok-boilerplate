import React from 'react'
import Link from 'gatsby-link'
import SbEditable from 'storyblok-react'

const Teaser = (props) => (
  <SbEditable content={props.blok}>
    <Link className="btn btn-primary" to={'/' + (props.blok.link.cached_url === 'home' ? '' : props.blok.link.cached_url)}>
      {props.blok.name}
    </Link>
  </SbEditable>
)

export default Teaser
