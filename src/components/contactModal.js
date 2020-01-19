import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
  } from 'react-bootstrap';

import {
    Jumbotron
  } from 'reactstrap';
  
import '../App.css';

export default class ContactModal extends React.Component {

    render() {
        return (
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
        );
    }

};