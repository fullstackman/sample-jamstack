import React from 'react'
import Link from 'gatsby-link'

import logo from '../img/logo.png'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <span className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src="/img/logo.png" alt="Mangu"/>
        </Link>
      </span>
      <span className="navbar-start">
        <Link className="navbar-item" to="/menu">Menu &#9776;</Link>
      </span>
    </div>
  </nav>
)

export default Navbar
