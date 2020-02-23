import React from 'react';
import '../App.css';
// import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
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
        firstName: this.state.name,
        phoneNo: this.state.phoneNo
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };
    const request = new Request('https://cardio-health.in/api/getintouch/', {
      method: 'POST',
      body: JSON.stringify({
        firstName: this.state.name,
        phoneNo: this.state.phoneNo
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const response = fetch(request)
      .then(data => {
        console.log('then');
        alert(
          'Thanks for submitting your interest. Our customer exuecutives will reach out to you shortly'
        );
      })
      .catch(function () {
        console.log('catch');
        alert(
          'Sorry, your request can not be submitted. Please try after refreshing the page again.'
        );
      });
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;

    const value = target.value;
    const name = target.name;
    if (name === 'name') {
      this.setState({
        name: value
      });
    }
    if (name === 'phoneNo') {
      this.setState({
        phoneNo: value
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
                <h4 class="modal-title">Your Better Health is a click away</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>
              <div class="modal-body">
                <div class="form-group">
                  {/* <label for="recipient-name" class="col-form-label">Name:</label> */}
                  <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Your Name"
                  />
                </div>
                <div class="form-group">
                  {/* <label for="message-text" class="col-form-label">Phone:</label> */}
                  <input
                    value={this.state.phoneNo}
                    onChange={this.handleChange}
                    name="phoneNo"
                    type="tel"
                    class="form-control"
                    id="message-text"
                    placeholder="Mobile Number"
                  ></input>
                </div>
              </div>
              <div class="modal-footer">
                {/* <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button> */}
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                  style={{ backgroundColor: '#0071E3' }}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}