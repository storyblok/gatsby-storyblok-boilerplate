const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    resolve(
      graphql(
        `{
          stories: allStoryblokEntry {
            edges {
              node {
                id
                name
                created_at
                uuid
                slug
                field_component
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
        const contents = entries.filter((entry) => {
          return entry.node.field_component != 'global_navi'
        })

        contents.forEach((entry, index) => {
          const pagePath = entry.node.full_slug == 'home' ? '' : `${entry.node.full_slug}/`
          const globalNavi = entries.filter((globalEntry) => {
            return globalEntry.node.field_component == 'global_navi' && globalEntry.node.lang == entry.node.lang
          })
          if (!globalNavi.length) {
            throw new Error('The global navigation item has not been found. Please create a content item with the content type global_navi in Storyblok.')
          }

          createPage({
            path: `/${pagePath}`,
            component: storyblokEntry,
            context: {
              globalNavi: globalNavi[0].node,
              story: entry.node
            }
          })
        })
      })
    )
  })
}
