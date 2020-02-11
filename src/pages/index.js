import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
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
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <Link to={edge.node.fields.slug}>
              <li key={edge.id}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </li>
            </Link>
          )
        })}
      </ol>
    </Layout>
  )
}

export default IndexPage
