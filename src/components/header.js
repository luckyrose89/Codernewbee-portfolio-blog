import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Codernewbee</Link>
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <a href="https://luckyrose89.github.io/portfolio-codernewbee/">
              Portfolio
            </a>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
