import React from 'react';
import Introduction from './introduction';
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Loginform from './components/loginform.js';
// import '../css/buttons.css'
// import '../css/misc.css'
import Popup from 'reactjs-popup';
=======
import {Working} from './working.js'
import Popup from "reactjs-popup";
>>>>>>> added how it works

import { Jumbotron } from 'reactstrap';

import {
<<<<<<< HEAD
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';
=======
  Jumbotron
} from 'reactstrap';

import {Navbar, Nav, NavDropdown}  from 'react-bootstrap'
>>>>>>> added how it works
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
              {/* <!-- Modal --> */}
              <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                  {/* <!-- Modal content--> */}
                  <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title">Please Enter Your Details</h4>
                      <button type="button" class="close" data-dismiss="modal">
                        &times;
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          {/* <label for="recipient-name" class="col-form-label">Name:</label> */}
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                            placeholder="Name"
                          />
                        </div>
                        <div class="form-group">
                          {/* <label for="message-text" class="col-form-label">Phone:</label> */}
                          <input
                            type="tel"
                            class="form-control"
                            id="message-text"
                            placeholder="Mobile No. "
                          ></input>
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>

        <div id="photo1">
          <Loginform />
        </div>

        <div id="photo2">
          <Introduction />
        </div>

<<<<<<< HEAD
        <div id="photo3">
          <Jumbotron>
            <h1 className="display-3">Joke Cards</h1>
            <p className="lead">
              Welcome to the next billion dollar app taking the world by storm
            </p>
            <hr className="my-2" />
            <p>Prepare to be amused!</p>
            <p className="lead"></p>
          </Jumbotron>
        </div>

        <div id="photo4">
          <Jumbotron>
            <h1 className="display-3">Joke Cards</h1>
            <p className="lead">
              Welcome to the next billion dollar app taking the world by storm
            </p>
            <hr className="my-2" />
            <p>Prepare to be amused!</p>
            <p className="lead"></p>
          </Jumbotron>
        </div>
=======
<div id="photo2">
        <Working />
</div>

<div id="photo3">
         <Jumbotron>
           <h1 className="display-3">Joke Cards</h1>
           < p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
           <hr className="my-2" />
           <p>Prepare to be amused!</p>
             <p className="lead">
           </p>
         </Jumbotron>
</div>
>>>>>>> added how it works

        <div id="photo5">
          <Jumbotron>
            <h1 className="display-3">Joke Cards</h1>
            <p className="lead">
              Welcome to the next billion dollar app taking the world by storm
            </p>
            <hr className="my-2" />
            <p>Prepare to be amused!</p>
            <p className="lead"></p>
          </Jumbotron>
        </div>

<<<<<<< HEAD
        <Joke />
      </div>
=======
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
        
     
   </div>
>>>>>>> added how it works
    );
  }
}
