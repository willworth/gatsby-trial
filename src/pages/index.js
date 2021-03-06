import React from "react";
import Link from "gatsby-link";

const IndexPage = ({ data }) => (
  <div style={{ color: `grey` }}>
    <h1>Hello Gatsby!</h1>
    <p>This is the demo site. Pulling from index.js </p>

    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/about">Go to the about page</Link>
    <br />
    <br />
    <h2>Index</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(post => (
        <li>
          <Link key={post.node.id} href={post.node.frontmatter.path}>
            {post.node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 10
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { eq: false } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;
export default IndexPage;
