import React from 'react';
import { Row, Col } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import '../App.css';
import { Image } from 'react-bootstrap';
import Doctor from '../resources/jeet-doctor-laptop.png';
import MobileDoctor from '../resources/jeet_doctor_mobile.jpg';
import Doc from '../resources/doc2.png';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Introfrom from './introfrom';

export default class Introduction extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fields: {},
      errors: {}
    };
  }
  render() {
    return (
      <div style={{ backgroundColor: '#E0ECF7' }}>
        <div className="container">
          <div
            className="row"
            style={{
              textAlign: 'center',
              alignItems: 'center',
              backgroundColor: '#E0ECF7'
            }}
          >
            <Col
              className=""
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              style={{
                textAlign: 'left',
                alignItems: 'center',
                paddingLeft: ''
              }}
            >
              <br></br>
              <br></br>
              <br></br>
              <h2>
                Your
                <span style={{ color: 'red' }}>&nbsp;Heart&nbsp;</span>is
                priceless
              </h2>
              <h3>
                We will help you <span style={{ color: 'green' }}>beat it</span>
              </h3>
              <h5>
                Cardio Health.com helps you with all of your Cardiac problems.
                Cardiology diagnosis and treatment options available at your
                fingertips.
              </h5>
              <br></br>
              <br></br>
              <br></br>
            </Col>
            <Col
              xs={6}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              style={{ backgroundImage: `url()` }}
            >
              <img src={Doc}></img>
            </Col>
            <Introfrom></Introfrom>
          </div>
        </div>
      </div>
    );
  }
}
