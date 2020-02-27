import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import ReactGA from 'react-ga';
// Require `PhoneNumberFormat`.
const PNF = require('google-libphonenumber').PhoneNumberFormat;

// Get an instance of `PhoneNumberUtil`.
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

export default class ContactModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phoneNo: '',
      validPhoneNumber: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    ReactGA.event({
      category: 'Click',
      action: 'Submit contact Modal'
    });
    const number = phoneUtil.parseAndKeepRawInput(this.state.phoneNo, 'IN');
    if (phoneUtil.isValidNumber(number) === true) {
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
          ReactGA.event({
            category: 'Click',
            action: 'Successful Submit contact Modal'
          });
          return;
        })
        .catch(function() {
          console.log('catch');
          alert(
            'Sorry, your request can not be submitted. Please try after refreshing the page again.'
          );
          ReactGA.event({
            category: 'Click',
            action: 'UnSuccessful Submit, Error, contact Modal'
          });
        });
    } else {
      this.setState({
        validPhoneNumber: 'Enter a valid phone number'
      });
      alert('Please enter a valid phone number');
      ReactGA.event({
        category: 'Click',
        action: 'UnSuccessful Submit, Incorrect Number, contact Modal'
      });
    }
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
      // Parse number with country code and keep raw input.
      // console.log(this.state.phoneNo);
      const number = phoneUtil.parseAndKeepRawInput(value, 'IN');
      // alert("CountryCode => " + number.getCountryCode());
      // alert("Number => " + number.getNationalNumber());
      // alert("Possibel? " + phoneUtil.isPossibleNumber(number));
      // alert("Valid? " + phoneUtil.isValidNumber(number));
      if (phoneUtil.isValidNumber(number) === true) {
        this.setState({
          validPhoneNumber: ''
        });
      } else this.setState({ validPhoneNumber: 'Enter a valid Phone number' });
    }
  }

  render() {
    // ReactGA.event({
    //   category: 'Click',
    //   action: 'Open contact Modal'
    // });
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
                  <label for="recipient-name" class="col-form-label">
                    Enter Name
                  </label>
                  <input
                    value={this.state.name}
                    onChange={this.handleChange}
                    name="name"
                    type="text"
                    class="form-control"
                    id="recipient-name"
                    placeholder="Enter Name"
                  />
                  <div class="form-group">
                    <label for="message-text" class="col-form-label">
                      Mobile Number
                    </label>
                    <input
                      value={this.state.phoneNo}
                      onChange={this.handleChange}
                      name="phoneNo"
                      type="tel"
                      class="form-control"
                      id="message-text"
                      placeholder="Mobile Number"
                      required
                    ></input>
                    <small id="phoneHelp" class="" style={{ color: 'red' }}>
                      {this.state.validPhoneNumber}
                    </small>
                    <small id="phoneHelp" class="form-text text-muted">
                      We'll never share your name and number with anyone else.
                    </small>
                    <small id="phoneHelp" class="form-text text-muted">
                      By pressing Submit button, You agree to{' '}
                      <href to="cardio-health.in">cardio-health.in </href>
                      <Link to="/terms-and-conditions">
                        Terms & Conditions{' '}
                      </Link>
                      and<Link to="privacy-policy"> privacy policy</Link>.
                    </small>
                  </div>
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
