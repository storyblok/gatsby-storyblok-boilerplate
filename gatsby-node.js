/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

const getByComponent = (query, type) =>
  query.filter(({ node }) => node.field_component === type)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const allStoryblokEntryQuery = await graphql(`
    {
      stories: allStoryblokEntry(filter: { field_component: { eq: "page" } }) {
        edges {
          node {
            id
            name
            slug
            field_component
            full_slug
            content
          }
        }
      }
    }
  `).then(res => res.data)

  const { edges: stories } = allStoryblokEntryQuery.stories

  const allPages = getByComponent(stories, "page")
  allPages.forEach(entry => {
    if (entry.slug === "home") return null

    const page = {
      path: `/${entry.node.full_slug}`,
      component: path.resolve("src/templates/page.js"),
      context: {
        story: entry.node,
      },
    }
    createPage(page)
  })

  // const allPosts = getByComponent(stories, "post")
  // allPosts.forEach(entry => {
  //   if (entry.slug === "home") return null

  //   const page = {
  //     path: `/${entry.node.full_slug}`,
  //     component: path.resolve("src/templates/page.js"),
  //     context: {
  //       story: entry.node,
  //     },
  //   }
  //   createPage(page)
  // })
}
