import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../resources/logo.png';
import { Jumbotron } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

import '../App.css';

export default class NavigationBar extends React.Component {
  brandDefinition = () => {
    if (isMobile) {
      return (
        <Navbar.Brand href="#" style={{ marginLeft: '5%' }}>
          <Row style={{ alignItems: 'center' }}>
            <Col xs={4}>
              <img src={logo} alt="Logo" height="" width="60" />
            </Col>
            <Col xs={4}>
              <h4>Cardio Health</h4>
            </Col>
          </Row>
        </Navbar.Brand>
      );
    }
    return (
      <Navbar.Brand href="#" style={{ marginLeft: '5%' }}>
        <Row style={{ alignItems: 'center' }}>
          <Col>
            <img src={logo} alt="Logo" height="" width="100" />
          </Col>
          <Col>
            <h3>Cardio Health</h3>
          </Col>
        </Row>
      </Navbar.Brand>
    );
  };

  render() {
    return (
      <div id="navigation-bar">
        <Navbar expand="lg" style={{ backgroundColor: '#17A2B8' }}>
          {this.brandDefinition()}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ textAlign: 'center' }}
          >
            <Nav className="mr-auto">
              <Nav.Link
                href="#introduction"
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 'larger',
                  fontFamily: 'HelveticaNeue'
                }}
              >
                Introduction
              </Nav.Link>
              <Nav.Link
                href="#working"
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 'larger',
                  fontFamily: 'HelveticaNeue'
                }}
              >
                Working
              </Nav.Link>
              <Nav.Link
                href="#testimonial"
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 'larger',
                  fontFamily: 'HelveticaNeue'
                }}
              >
                Testimonial
              </Nav.Link>
              <Nav.Link
                href="#ourDoctors"
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 'larger',
                  fontFamily: 'HelveticaNeue'
                }}
              >
                Our Doctors
              </Nav.Link>
              <Nav.Link
                href="#component5"
                style={{
                  color: '#ffffff',
                  fontWeight: 'bold',
                  fontSize: 'larger',
                  fontFamily: 'HelveticaNeue'
                }}
              >
                Component5
              </Nav.Link>
            </Nav>
            {/* <!-- Trigger the modal with a button --> */}
            <button
              type="button"
              class="btn btn-info"
              data-toggle="modal"
              data-target="#myModal"
              style={{
                backgroundColor: 'black',
                borderRadius: '25px',
                alignItems: 'center'
              }}
            >
              <h6 style={{ marginBottom: '0px' }}>Contact Us</h6>
            </button>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
