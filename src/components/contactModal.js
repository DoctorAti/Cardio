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

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNo: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    const options = {
      method: 'POST',
      body: JSON.stringify({
        "firstName": this.state.name,
        "phoneNo": this.state.phoneNo
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }

    }
    const request = new Request('http://localhost:8081/api/getintouch/', {
      method: 'POST',
      body: JSON.stringify({
        "firstName": this.state.name,
        "phoneNo": this.state.phoneNo
      }),
      headers: {
        'Content-Type': 'application/json'
      }

    });
    const response = await fetch(request).
      then(
        function () {
          alert('Your request submitted successfully');
          console.log("maja aa gayaaaaa");
        }
      ).
      catch(function () {
        alert('nahi hua')
        console.log("siiiit");
      });
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;

    const value = target.value;
    const name = target.name;
    if (name === 'name') {
      this.setState({
        'name': value
      });
    }
    if (name === 'phoneNo') {
      this.setState({
        'phoneNo': value
      });
    }

  }

  render() {
    return (
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">
          {/* <!-- Modal content--> */}
          <div class="modal-content">
            <form onSubmit={this.handleSubmit}>
              <div class="modal-header">
                <h4 class="modal-title">Please Enter Your Details</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                      </button>
              </div>
              <div class="modal-body">

                <div class="form-group">
                  {/* <label for="recipient-name" class="col-form-label">Name:</label> */}
                  <input
                    value={this.state.name} onChange={this.handleChange}
                    name="name"
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Name"
                  />
                </div>
                <div class="form-group">
                  {/* <label for="message-text" class="col-form-label">Phone:</label> */}
                  <input
                    value={this.state.phoneNo} onChange={this.handleChange}
                    name="phoneNo"
                    type="tel"
                    class="form-control"
                    id="message-text"
                    placeholder="Mobile No. "
                  ></input>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                      </button>

                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

};