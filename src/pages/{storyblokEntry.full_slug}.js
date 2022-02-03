import * as React from "react"

import { graphql } from 'gatsby'
import useStoryblok from "../lib/storyblok"
import { sbEditable } from "@storyblok/storyblok-editable"
import DynamicComponent from "../components/dynamicComponent"

import Layout from "../components/layout"

export default function StoryblokEntry({ data, location }) {
  let story = data.storyblokEntry
  story = useStoryblok(story, location)

  const components = story.content.body.map(blok => {
    return (<DynamicComponent blok={blok} key={blok._uid} />)
  })

  return (
    <Layout>
      <div {...sbEditable(story.content)}>
        {components}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($full_slug: String!) {
    storyblokEntry(full_slug: { eq: $full_slug }) {
      id
      name
      full_slug
      content
    }
  }
`
