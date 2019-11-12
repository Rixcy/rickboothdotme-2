import React from 'react'
import logo from 'src/static/logo-colour.png'

import Link from 'gatsby-link'

import { NavItems, NavItem } from './Navbar.style'

import NavLinks from './NavLinks'

import ToggleSwitch from 'src/components/common/ToggleSwitch'

const NavDesktop = () => {
  return (
    <>
      <Link className="logo" to="/">
        <img src={logo} alt="Rick Booth" />
      </Link>

      <nav>
        <NavItems>
          <NavLinks NavItem={NavItem} />

          <NavItem>
            <Link to="/blog">blog</Link>
          </NavItem>
          <NavItem>
            <ToggleSwitch />
          </NavItem>
        </NavItems>
      </nav>
    </>
  )
}

export default NavDesktop
