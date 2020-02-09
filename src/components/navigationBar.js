import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../resources/logo.png'
import { Jumbotron } from 'reactstrap';

import '../App.css';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div id="navigation-bar">
        <Navbar expand="lg" style={{backgroundColor: '#add8e6'}}>
          <Navbar.Brand href="#" style={{marginLeft: '15%'}}>
              <img src={logo} alt="Logo" width='101' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto" style={{marginLeft: '15%'}}>
              <Nav.Link href="#introduction" style={{color: '#ffffff', fontWeight: 'bold', fontSize: 'larger'}}>Introduction</Nav.Link>
              <Nav.Link href="#working" style={{color: '#ffffff', fontWeight: 'bold', fontSize: 'larger'}}>Working</Nav.Link>
              <Nav.Link href="#testimonial" style={{color: '#ffffff', fontWeight: 'bold', fontSize: 'larger'}}>Testimonial</Nav.Link>
              <Nav.Link href="#ourDoctors" style={{color: '#ffffff', fontWeight: 'bold', fontSize: 'larger'}}>Our Doctors</Nav.Link>
              <Nav.Link href="#component5" style={{color: '#ffffff', fontWeight: 'bold', fontSize: 'larger'}}>Component5</Nav.Link>
            </Nav>
            {/* <!-- Trigger the modal with a button --> */}
            <button
              type="button"
              class="btn btn-info"
              data-toggle="modal"
              data-target="#myModal"
            >
              Contact Us
            </button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
