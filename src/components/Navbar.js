import React from 'react'
import Link from 'gatsby-link'

const Navbar = () => (
  <nav className="my-nav level is-mobile no-margin">
      <span className="level-left">
        <Link to="/">
          <img src="/img/logo.png" width="50vh" alt="Mangu"/>
        </Link>
        Mangu
      </span>
      <span className="level-right">
        <Link className="navbar-item" to="/menu">Menu &#9776;</Link>
      </span>
  </nav>
)

export default Navbar
