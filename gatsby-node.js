//this is where you config the graphql to be visible. WCNET
/**
 * Implement Gatsby's Node APIs in this file.
 *https://www.gatsbyjs.org/tutorial/part-four/#create-a-list-of-our-sites-markdown-files-in-srcpagesindexjs
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
//
// You can delete this file if you're not using it

const path = require("path");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const postTemplate = path.resolve("src/templates/post.js");

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      });
    });
  });
};
