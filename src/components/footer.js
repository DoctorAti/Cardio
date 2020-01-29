import React, { Component } from 'react';
import phone from '../resources/phone.png';
import mail from '../resources/mail.png';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
class footer extends Component {
  render() {
    return (
      <div
        className="card"
        style={{ backgroundColor: '#17A2B8', color: 'white' }}
      >
        <div className="card-header" style={{ textAlign: 'center' }}>
          <div
            className="row"
            style={{ textAlign: 'center', alignItems: 'center' }}
          >
            <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
              <h3>Still unsure? Talk to a Care Manager</h3>
            </Col>
            <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
              <div
                className="row"
                style={{ textAlign: 'center', alignItems: 'center' }}
              >
                <div className="col">
                  <div
                    className="row"
                    style={{ textAlign: 'center', alignItems: 'center' }}
                  >
                    <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
                      <a href="tel:+18475555555">
                        <img src={phone} width="30%" alt="logo"></img>
                      </a>
                    </Col>
                    <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
                      <h6>Call us at</h6>
                      <h6>
                        <a href="tel:+18475555555" style={{ color: 'white' }}>
                          1-847-555-5555
                        </a>
                      </h6>
                    </Col>
                  </div>
                </div>
                <div className="col">
                  <div
                    className="row"
                    style={{ textAlign: 'center', alignItems: 'center' }}
                  >
                    <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
                      <a href="mailto:abc@example.com">
                        <img src={mail} width="30%" alt="logo"></img>
                      </a>
                    </Col>
                    <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
                      <h6>Write to us</h6>
                      <h6>
                        <a
                          href="mailto:abc@example.com"
                          style={{ color: 'white' }}
                        >
                          abc@example.com
                        </a>
                      </h6>
                    </Col>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </div>
        <div
          className="card-body"
          style={{ backgroundColor: '#F8F9FA', color: 'black' }}
        >
          {/* <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    <a href="#" className="btn btn-info">Go somewhere</a> */}
          <div className="row" style={{ textAlign: 'center' }}>
            <Col className="col" xs={12} sm={12} md={3} lg={3} xl={3}>
              <h5>About Cardio</h5>
              <p>
                <Link>About Us</Link>
              </p>
              <p>
                <Link to="/">Introduction</Link>
              </p>
            </Col>
            <Col className="col" xs={12} sm={12} md={3} lg={3} xl={3}>
              <h5>Help</h5>
              <p>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </p>
              <p>
                <Link to="/terms-and-conditions">T&C</Link>
              </p>
            </Col>
            <Col className="col" xs={12} sm={12} md={6} lg={6} xl={6}>
              <h5>Find Us</h5>
              <p>
                Onco.com, #163/A, 9th Main, Sector 6, HSR Layout, Bengaluru,
                Karnataka – 560 102
              </p>
              <p>
                <a href="mailto:abc@example.com">abc@example.com</a>
              </p>
              <p>
                <a href="tel:+18475555555">1-847-555-5555</a>
              </p>
            </Col>
          </div>
        </div>
      </div>
    );
  }
}

export default footer;