import React from "react"
import { Link } from "gatsby"
import headerStyles from "./header.module.scss"

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visibility: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault()
    if (!this.state.visibility) {
      this.setState({
        visibility: true,
      })
    } else {
      this.setState({
        visibility: false,
      })
    }
  }

  render() {
    return (
      <header className={headerStyles.header}>
        <div className={headerStyles.headerContainer}>
          <div>
            <h1 className={headerStyles.brand}>
              <Link to="/">Codernewbee</Link>
            </h1>
          </div>
          <nav className={headerStyles.main_nav}>
            <ul className={headerStyles.items}>
              <li className={headerStyles.item}>
                <Link to="/about">About</Link>
              </li>
              <li className={headerStyles.item}>
                <a href="https://luckyrose89.github.io/portfolio-codernewbee/">
                  Portfolio
                </a>
              </li>
              <li className={headerStyles.item}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <button
            className={headerStyles.toggleButton}
            onClick={this.handleClick}
          >
            <span className={headerStyles.toggleButton__bar}></span>
            <span className={headerStyles.toggleButton__bar}></span>
            <span className={headerStyles.toggleButton__bar}></span>
          </button>
        </div>
        {this.state.visibility ? (
          <div className={headerStyles.mobileNav}>
            <ul className={headerStyles.mobileItems}>
              <li className={headerStyles.mobileItem}>
                <Link to="/about">About</Link>
              </li>
              <li className={headerStyles.mobileItem}>
                <a href="https://luckyrose89.github.io/portfolio-codernewbee/">
                  Portfolio
                </a>
              </li>
              <li className={headerStyles.mobileItem}>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </header>
    )
  }
}

export default Header
