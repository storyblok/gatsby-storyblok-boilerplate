const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    resolve(
      graphql(
        `{
          globalNavi: storyblokEntry(slug: { eq: "global-navi" }) {
            content
          }
          stories: allStoryblokEntry {
            edges {
              node {
                id
                name
                created_at
                uuid
                slug
                full_slug
                content
                is_startpage
                parent_id
                group_id
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
        const globalNavi = result.data.globalNavi

        entries.forEach((entry, index) => {
          let pagePath = entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              globalNavi: globalNavi,
              story: entry.node
            }
          })
        })
      })
    )
  })
}
