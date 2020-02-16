import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Jumbotron } from 'reactstrap';
import '../App.css';
import { Image } from 'react-bootstrap';
import Appointment from '../resources/appointment.svg';
import ExpertOpinion from '../resources/expert-opinion.svg';
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from 'react-device-detect';

export default class Products extends React.Component {
  render() {
    return (
      <div style={{ margin: '7.5%', textAlign: 'center' }}>
        <div id="OurServices" style={{ margin: '3%' }}>
          <h1>Our Services</h1>
        </div>
        <div
          className="row"
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {this.mobileSpace()}
          {this.PanelOpinion()}
        </div>
      </div>
    );
  }

  mobileSpace = () => {
    if (isMobile) {
      return (
        <div style={{ height: '10px' }}>
          <br />
        </div>
      );
      return <div></div>;
    }
  };

  fontSize() {
    if (isMobile) return '100%';
    return '150%';
  }

  fontWeight() {
    if (isMobile) return 'normal';
    return 'bolder';
  }

  padding() {
    if (isMobile) return '20px 18px 40px';
    return '30px';
  }

  margin() {
    if (isMobile) return '5% 0 5% 0';
    return '0%';
  }

  PanelOpinion = () => {
    return (
      <div
        style={{
          borderStyle: 'solid',
          borderWidth: '2px',
          borderColor: 'grey'
        }}
      >
        <div
          className="header"
          style={{
            backgroundColor: '#17A2B8',
            color: '#ffffff',
            fontWeight: this.fontWeight(),
            padding: this.padding(),
            textAlign: 'center',
            fontSize: '180%'
          }}
        >
          <span>Facing challenges with existing treatment?</span>
        </div>
        <div
          className="body"
          style={{
            textAlign: 'center',
            color: '#black',
            padding: this.padding(),
            fontSize: this.fontSize(),
            fontWeight: '',
            fontFamily: ''
          }}
        >
          <img src={ExpertOpinion} height="50px" width="50px" />
          <br />
          <span>Joint review by a team of experts in</span>
          <br />
          <span>India and US for cutting-edge</span>
          <br />
          <span>treatment plans</span>
          <br />
          <Button
            style={{
              backgroundColor: '#ef6c00',
              marginTop: '5%',
              fontFamily: '',
              borderColor: '#ababab'
            }}
          >
            <h4
              style={{ marginBottom: '0px' }}
              data-toggle="modal"
              data-target="#myModal"
            >
              {' '}
              Get Expert Opinion
            </h4>
          </Button>
        </div>
        <div
          className="footer"
          style={{
            backgroundColor: 'black',
            color: '#ffffff',
            fontWeight: this.fontWeight(),
            textAlign: 'center',
            padding: this.padding(),
            fontSize: this.fontSize()
          }}
        >
          <span
            style={{ color: '#ef6c00', fontWeight: 'bolder', fontSize: '25px' }}
          >
            80%{' '}
          </span>
          <span>Patients changed their treatment after this service</span>
        </div>
      </div>
    );
  };

  Appointment = () => {
    return (
      <div style={{ borderStyle: 'solid', borderWidth: '4px' }}>
        <div
          className="header"
          style={{
            backgroundColor: '#11375c',
            color: '#ffffff',
            fontWeight: this.fontWeight(),
            padding: this.padding(),
            textAlign: 'center',
            fontSize: '150%'
          }}
        >
          <span>Facing challenges with existing treatment?</span>
        </div>
        <div
          className="body"
          style={{
            textAlign: 'center',
            color: '#a6a6a6',
            padding: this.padding(),
            fontSize: this.fontSize()
          }}
        >
          <img src={Appointment} height="50px" width="50px" />
          <br />
          <span>Joint review by a team of experts in</span>
          <br />
          <span>India and US for cutting-edge</span>
          <br />
          <span>treatment plans</span>
          <br />
          <Button style={{ backgroundColor: '#52ADF3' }}>
            {' '}
            Get Expert Opinion
          </Button>
        </div>
        <div
          className="footer"
          style={{
            backgroundColor: '#a6a6a6',
            color: '#ffffff',
            fontWeight: this.fontWeight(),
            textAlign: 'center',
            padding: this.padding(),
            fontSize: this.fontSize()
          }}
        >
          <span style={{ color: '#11375c', fontWeight: 'bolder' }}>80% </span>
          <span>Patients changed their treatment after this service</span>
        </div>
      </div>
    );
  };
}
