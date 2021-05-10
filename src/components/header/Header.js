import React from 'react';
import { Form } from 'react-bootstrap';
// import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink,UncontrolledDropdown,DropdownToggle,DropdownMenu,DropdownItem,NavbarText} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import App from '../../App';
import './Header.css';
import logo from './react-logo.svg';

const Header = () => {

  const Logout = () => {
    console.log('Logout!')
    localStorage.removeItem('validUser');
    window.location.reload();
  }
  
  return (
      <div className="navbar-custom">
        <NavLink to='/' className="navbar-brand d-block text-white text- border-bottom m-0 p-3"><img src={logo} className="header-logo" alt="logo" />Awwards</NavLink>
        <div className="navbar-menus">
          <NavLink exact className="nav-link" to="/" activeClassName="active_link">Dashboard</NavLink>
          <NavLink exact className="nav-link" to="/about" activeClassName="active_link">About</NavLink>
          <NavLink exact className="nav-link" to="/contact" activeClassName="active_link">Contact</NavLink>
          <NavLink className="nav-link" to="" onClick={Logout} >Logout</NavLink>
        </div>
        {/* <Link to="/">Dashboard</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
  
        {/* <Navbar color="faded" light expand="xl">
          <NavbarBrand href="/">Awwward!!</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink exact to="/" activeClassName="active_link">Dashboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/about" activeClassName="active_link">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink exact to="/contact" activeClassName="active_link">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar> */}
      </div>
  );
}

export default Header;