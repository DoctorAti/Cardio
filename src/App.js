import React from 'react';
import Joke from './Joke';
import Introduction from './introduction';
import Popup from "reactjs-popup";


import {
  Jumbotron
} from 'reactstrap';

import {Navbar, Nav, NavDropdown, Form, FormControl, Button}  from 'react-bootstrap'
import './App.css';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <div id="navigation-bar">
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#photo5">Link</Nav.Link>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
  </Navbar.Collapse>
</Navbar>
     
</div>

<div id="photo1">
        <Introduction />
</div>

<div id="photo2">
         <Introduction />
</div>

<div id="photo3">
         <Jumbotron>
           <h1 className="display-3">Joke Cards</h1>
           <p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
           <hr className="my-2" />
           <p>Prepare to be amused!</p>
             <p className="lead">
           </p>
         </Jumbotron>
</div>

<div id="photo4">
         <Jumbotron>
           <h1 className="display-3">Joke Cards</h1>
           <p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
           <hr className="my-2" />
           <p>Prepare to be amused!</p>
             <p className="lead">
           </p>
         </Jumbotron>
</div>

<div id="photo5">
         <Jumbotron>
           <h1 className="display-3">Joke Cards</h1>
           <p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
           <hr className="my-2" />
           <p>Prepare to be amused!</p>
             <p className="lead">
           </p>
         </Jumbotron>
</div>
     
     
       
    <Joke />
        
     
   </div>
    );
  }
};