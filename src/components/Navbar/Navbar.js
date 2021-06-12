import React, { useState } from 'react';
import { FaTimes, FaBars } from 'react-icons/fa'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon, 
  HamIcon 
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
   <>
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <NavIcon />
          Front-End News
        </NavLogo>
        <HamIcon onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </HamIcon>
      </NavbarContainer>
    </Nav>
   </>
  )
}

export default Navbar
