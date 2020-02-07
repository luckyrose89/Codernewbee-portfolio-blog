import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>
        &copy;{data.site.siteMetadata.title} created by{" "}
        {data.site.siteMetadata.author} All Rights reserved 2020
      </p>
    </footer>
  )
}

export default Footer
