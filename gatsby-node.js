/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

 const path = require('path')

 exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions

    return new Promise((resolve, reject) => {
        // sets the template for the pages
        const storyblokEntry = path.resolve('src/templates/page.js')
    
        // gets all storyblok stories with the content type 'page'
        resolve(
          graphql(
            `{
              stories: allStoryblokEntry(filter: {field_component: {eq: "page"}}) {
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
            }`
          ).then(result => {
            if (result.errors) {
              console.log(result.errors)
              reject(result.errors)
            }
    
            const entries = result.data.stories.edges
            
            // creates a page for each entry with the storyblok slug
            entries.forEach((entry) => {
                // skip home story
                if(entry.slug !== "home") {
                    const page = {
                        path: `/${entry.node.full_slug}`,
                        component: storyblokEntry,
                        context: {
                            story: entry.node
                        }
                    }
                    createPage(page)
                }
            })
          })
        )
      })
 }
