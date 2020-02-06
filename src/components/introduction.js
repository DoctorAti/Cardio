import React from 'react';
import { Row, Col } from 'reactstrap';

import { Jumbotron } from 'reactstrap';

import '../App.css';
import { Image } from 'react-bootstrap';
import Doctor from '../resources/frontpic.png'
import MobileDoctor from '../resources/jeet_doctor_mobile.jpg'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

export default class Introduction extends React.Component {
  render() {
    return <div>{this.renderIntrouction()}</div>;
  }

  renderIntrouction = () => {
    if (isMobile) {
      return (
        <div>
          <Jumbotron style={{ background: { MobileDoctor } }}>
            <p style={{ lineHeight: '10px' }}>
              <h3>Cardio is hard</h3>
            </p>
            <p style={{ lineHeight: '10px', color: 'green' }}>
              We will help you beat it
            </p>

            <hr className="my-2" />
            <p>
              It uses utility classes for <br />
              typography and spacing to <br />
              space content out within the
              <br /> larger container.
            </p>
            <p className="lead"></p>
          </Jumbotron>
        </div>
      );
    }
    return (
      // <Row style={{ margin: '7.5%' }}>
      //     <Col xs={6} sm={6} md={6} lg={6} xl={6}>
      //         <div className="container" style={{ textAlign: 'center' }}>
      //             <h1 style={{ verticalAlign: 'text-bottom', paddingTop: '20%', paddingLeft: '20%', textAlign: 'middle' }} > Your heart is priceless.<br /> We will help you beat it</h1>
      //             <h4>
      //                 Cardio Health.com helps you with all of your Cardiac problems. Cardiology diagnosis and treatment options available at your fingertips.
      //         </h4>
      //         </div>
      //     </Col>
      //     <Col xs={6} sm={6} md={6} lg={6} xl={6}>
      //         <Image src={Doctor} rounded alt="maja aa gaya" height="640" />
      //     </Col>

      // </Row>
      <div className="" style={{ backgroundColor: '#E0ECF7' }}>
        <Row
          className="container"
          style={{ textAlign: 'center', alignItems: 'center' }}
        >
          <Col
            xs={8}
            sm={8}
            md={8}
            lg={8}
            xl={8}
            style={{
              textAlign: 'left',
              alignItems: 'center',
              paddingLeft: '25%'
            }}
          >
            <br></br>
            <br></br>
            <br></br>
            <h1>
              Your
              <span style={{ color: 'red' }}>&nbsp;Heart&nbsp;</span>
              is priceless
            </h1>
            <h2>
              We will help you <span style={{ color: 'green' }}>beat it</span>
            </h2>
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
            xs={4}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            style={{ backgroundImage: `url()` }}
          >
            <img src={Doc}></img>
          </Col>
        </Row>
      </div>
    );
  };
}
