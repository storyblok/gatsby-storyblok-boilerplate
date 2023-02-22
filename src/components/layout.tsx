import * as React from "react"
import PropTypes from "prop-types"
import { storyblokInit, apiPlugin } from "gatsby-source-storyblok"
import Teaser from './Teaser'
import Grid from "./grid"
import Feature from "./feature"

storyblokInit({
  accessToken: process.env.GATSBY_PUBLIC_STORYBLOK,
  use: [apiPlugin],
  components: {
    teaser: Teaser,
    grid: Grid,
    feature: Feature
  }
});

const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
