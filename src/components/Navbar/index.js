import React from 'react';
import { Nav, NavLink} from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza Italiana</NavLink>
      </Nav>
    </>
  );
};

export default Navbar;
