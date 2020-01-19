import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import { Jumbotron } from 'reactstrap';

import '../App.css';

export default class NavigationBar extends React.Component {
  render() {
    return (
      <div id="navigation-bar">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#introduction">Introduction</Nav.Link>
              <Nav.Link href="#working">Working</Nav.Link>
              <Nav.Link href="#testimonial">Testimonial</Nav.Link>
              <Nav.Link href="#component4">Component4</Nav.Link>
              <Nav.Link href="#component5">Component5</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
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
