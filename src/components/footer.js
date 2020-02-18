import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import footerStyles from "./footer.module.scss"

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
    <footer className={footerStyles.container}>
      <p className={footerStyles.footerText}>
        &copy;{data.site.siteMetadata.title} created by{" "}
        <a
          href="https://github.com/luckyrose89"
          className={footerStyles.authorStyle}
        >
          {data.site.siteMetadata.author}
        </a>{" "}
        All Rights reserved 2020
      </p>
    </footer>
  )
}

export default Footer
