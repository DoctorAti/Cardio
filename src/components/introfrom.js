import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
class introfrom extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Col
        xs={12}
        sm={12}
        md={4}
        lg={4}
        xl={4}
        style={{ backgroundColor: 'FFFF00' }}
      >
        <div className="container">
          <br></br>
          <form>
            <div class="form-row mb-3">
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Your Name"
              />
            </div>
            <div class="form-row mb-3">
              <input
                type="text"
                class="form-control"
                id="validationDefault01"
                placeholder="Email"
              />
            </div>
            <div class="form-row mb-3">
              <PhoneInput country={'in'} required />
            </div>
            <div className="form-row mb-3">
              <select
                class="form-control my-1 mr-sm-2"
                id="inlineFormCustomSelectPref"
              >
                <option class="btn btn-primary" selected>
                  Choose your Question
                </option>
                <h1>
                  <option value="1">
                    Question A quick brown fox jump over the lazy dog One
                  </option>
                </h1>
                <option value="2">
                  Question A quick brown fox jump over the lazy dog One
                </option>
                <option value="3">
                  Question A quick brown fox jump over the lazy dog One
                </option>
              </select>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck1"
                  required
                />
                <label class="custom-control-label" for="customCheck1">
                  I Accept and agree to the
                  <Link to="terms-and-conditions">T&C</Link>
                </label>
              </div>
            </div>
            <button class="btn btn-primary" type="submit">
              Submit form
            </button>
          </form>
        </div>
      </Col>
    );
  }
}

export default introfrom;
