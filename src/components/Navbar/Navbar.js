import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
   <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon data-cy='logo'/>
            Front-End News
          </NavLogo>
          <MobileIcon onClick={handleClick} data-cy='mobile-menu'>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem data-cy='home-link'>
              <NavLinks to='/'>
                Home
              </NavLinks>
            </NavItem>

            <NavItem data-cy='saved-link'>
              <NavLinks to='/saved'>
                Saved
              </NavLinks>
            </NavItem>

            <NavItem data-cy='read-link'>
              <NavLinks to='/read'>
                Read
              </NavLinks>
            </NavItem>
          </NavMenu>
          
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
   </>
  )
}

export default Navbar
