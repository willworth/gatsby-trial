import React from "react";
import Link from 'gatsby-link'

const IndexPage = () => (
  <div style={{ color: `grey` }}>
   <h1>Hello Gatsby!</h1>
   <p>This is the demo site.  Pulling from index.js </p>   
      
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/about">Go to the about page</Link>
  </div>
)


export const pageQuery = graphql`
  query IndexQuery{
    allMarkdownRemark(limit: 10){
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }

`
export default IndexPage