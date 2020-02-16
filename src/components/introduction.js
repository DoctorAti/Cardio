import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import '../App.css';
import Doctor from '../resources/frontpic.png';
import MobileDoctor from '../resources/jeet_doctor_mobile.jpg';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';
import { Image, Button } from 'react-bootstrap';
export default class Introduction extends React.Component {
  render() {
    return (
      // <div width="100%">
      this.renderIntrouction()
      // </div>
    );
  }

  renderIntrouction = () => {
    if (isMobile) {
      return (
        <div>
          <Button
            type="button"
            data-toggle="modal"
            data-target="#myModal"
            class="btn btn-default"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: 'white',
              width: '100%',
              margin: '0px',
              padding: '0px',
              textAlign: 'left'
            }}
          >
            <Jumbotron
              style={{
                background: { MobileDoctor },
                fontFamily: 'helvetica',
                alignItems: 'center'
              }}
            >
              <span>
                <h3
                  style={{
                    marginBottom: '0px',
                    color: '#009bd6',
                    fontWeight: 'bolder'
                  }}
                >
                  Undergoing a
                </h3>
              </span>
              <span>
                <h3
                  style={{
                    marginTop: '0px',
                    color: '#009bd6',
                    fontWeight: 'bolder'
                  }}
                >
                  Heart treatment?
                </h3>
              </span>
              <div style={{ marginTop: '10%' }}>
                <span style={{ fontFamily: 'helvetica', color: 'black' }}>
                  Get a second opinion <br /> by World renowned team <br /> of
                  Cardiac Specialist
                </span>
              </div>
            </Jumbotron>
          </Button>
        </div>
      );
    }
    return (
      <div style={{ backgroundColor: '#ededed' }}>
        <Row style={{ marginLeft: '7.5%', marginRight: '7.5%' }}>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            {/* <div className="container"> */}
            <div
              style={{
                verticalAlign: 'text-bottom',
                paddingTop: '20%',
                paddingLeft: '%',
                textAlign: 'middle',
                fontFamily: 'helvetica',
                fontSize: '180%',
                color: '#228b22'
              }}
            >
              <span>
                <h1
                  style={{
                    marginBottom: '0px',
                    color: '#009bd6',
                    fontWeight: 'bolder',
                    fontSize: '54px'
                  }}
                >
                  Undergoing a
                </h1>
              </span>
              <span>
                <h1
                  style={{
                    marginTop: '0px',
                    color: '#009bd6',
                    fontWeight: 'bolder',
                    fontSize: '54px'
                  }}
                >
                  Heart treatment?
                </h1>
              </span>
              <div
                style={{ marginTop: '10%', fontSize: '40px', color: 'black' }}
              >
                <span style={{ fontFamily: 'helvetica' }}>
                  Get a second opinion <br /> by World renowned team <br /> of
                  Cardiac Specialist
                </span>
              </div>
            </div>
            {/* </div> */}
          </Col>
          <Col
            xs={6}
            sm={6}
            md={6}
            lg={6}
            xl={6}
            style={{ marginLeft: '-15%' }}
          >
            <Image
              src={Doctor}
              rounded
              alt="maja aa gaya"
              height="640"
              textAlign="left"
            />
          </Col>
        </Row>
      </div>
    );
  };
}
