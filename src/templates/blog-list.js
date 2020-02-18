import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

export const blogListQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 140)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            featuredImage {
              childImageSharp {
                sizes(maxWidth: 630) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

class IndexPage extends React.Component {
  render() {
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <Layout>
        <ol className={blogStyles.posts}>
          {this.props.data.allMarkdownRemark.edges.map(edge => {
            return (
              <li key={edge.node.id} className={blogStyles.post}>
                <div className={blogStyles.postImg}>
                  <Link to={edge.node.fields.slug}>
                    <Img
                      sizes={
                        edge.node.frontmatter.featuredImage.childImageSharp
                          .sizes
                      }
                    />
                  </Link>
                </div>
                <div className={blogStyles.postText}>
                  <p>{edge.node.frontmatter.date}</p>
                  <h3>{edge.node.frontmatter.title}</h3>
                  <p
                    dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}
                  ></p>
                  <Link to={edge.node.fields.slug}>
                    <span>Read more</span>
                  </Link>
                </div>
              </li>
            )
          })}
        </ol>
        {!isFirst && (
          <Link to={prevPage} rel="prev">
            ← Previous Page
          </Link>
        )}
        {!isLast && (
          <Link to={nextPage} rel="next">
            Next Page →
          </Link>
        )}
      </Layout>
    )
  }
}

export default IndexPage
