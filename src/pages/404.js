import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { sbEditable } from "@storyblok/storyblok-editable"

import Layout from "../components/layout"
import Seo from "../components/seo"
import DynamicComponent from "../components/dynamicComponent"
import useStoryblok from "../lib/storyblok"

const NotFoundPage = ({ location }) => {
  let components = null
  let story = useStoryblok(null, location)

  if(story) {
    components = story.content.body.map(blok => {
      return (<DynamicComponent blok={blok} key={blok._uid} />)
    })
  }

  return (
  <Layout>
    <Seo title="Home" />
    <div {...sbEditable(story)} content={story ? story.content : false }>
      <h1>{ story ? story.content.title : 'Not Found' }</h1>
      { components }
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  </Layout>
)}

export default NotFoundPage
