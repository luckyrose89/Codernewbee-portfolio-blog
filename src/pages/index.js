import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            excerpt(pruneLength: 140)
            id
            frontmatter {
              title
              date
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
  `)
  return (
    <Layout>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id} className={blogStyles.post}>
              <div className={blogStyles.postImg}>
                <Link to={edge.node.fields.slug}>
                  <Img
                    sizes={
                      edge.node.frontmatter.featuredImage.childImageSharp.sizes
                    }
                  />
                </Link>
              </div>
              <div className={blogStyles.postText}>
                <p>{edge.node.frontmatter.date}</p>
                <h3>{edge.node.frontmatter.title}</h3>
                <p dangerouslySetInnerHTML={{ __html: edge.node.excerpt }}></p>
                <Link to={edge.node.fields.slug}>
                  <span>Read more</span>
                </Link>
              </div>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
