import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavBarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NaveBtnLink} from './NavBarElements'

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to='/'>Plants</NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="plants">Plants</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services">Services</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NaveBtnLink to="/signin">Sign In</NaveBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  )
}

export default NavBar;
