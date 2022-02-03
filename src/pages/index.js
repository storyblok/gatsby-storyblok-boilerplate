import * as React from "react"

import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import useStoryblok from "../lib/storyblok"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "../components/dynamicComponent"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data, location }) => {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  const image = getImage(data.image1)

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        <Seo title="Home" />
        <h1>{story.content.title}</h1>
        {components}
        <GatsbyImage image={image} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    storyblokEntry(full_slug: {eq: "home"}) {
      content
      name
    },
    image1: file(name: {eq: "image-1"}) {
      name
      absolutePath
      childImageSharp {
        gatsbyImageData(
          width: 500
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    },
  }
`