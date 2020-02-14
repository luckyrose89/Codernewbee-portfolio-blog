import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import entryStyles from "./entry.module.scss"
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      fields {
        readingTime {
          text
        }
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <div className={entryStyles.container}>
        <h1 className={entryStyles.heading}>
          {props.data.markdownRemark.frontmatter.title}
        </h1>
        <p className={entryStyles.heading}>
          {props.data.markdownRemark.frontmatter.date} /{" "}
          {props.data.markdownRemark.fields.readingTime.text}
        </p>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default Blog
