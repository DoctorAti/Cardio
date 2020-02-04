import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import { Jumbotron } from 'reactstrap';

import '../App.css';
import { Image } from 'react-bootstrap';
import Doctor from '../resources/jeet-doctor-laptop.png'
import MobileDoctor from '../resources/jeet_doctor_mobile.jpg'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

export default class Introduction extends React.Component {

    render() {
        return (
            <div>
                {this.renderIntrouction()}
            </div>
        );
    }

    renderIntrouction = () => {
        if (isMobile) {
            return <div>
                <Jumbotron style={{ background: { MobileDoctor } }}>

                    <p style={{ lineHeight: '10px' }}><h3>Cardio is hard</h3></p>
                    <p style={{ lineHeight: '10px', color:'green' }}>We will help you beat it</p>

                    <p style={{fontFamily: 'Justify'}}>Get a second opinion by <br/> world renowned team of <br/> cardiac specialist</p>
                    <p className="lead">
                    </p>
                </Jumbotron>
            </div>

        }
        return (
            <div style={{backgroundColor: '#ededed'}}>
        <Row style={{ marginLeft: '7.5%', marginRight: '7.5%', }} > 
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>


                <div className="container">
                    <div  style={{ verticalAlign: 'text-bottom', paddingTop: '15%', paddingLeft: '17.5%' , textAlign:'middle', fontFamily: 'Verdana', fontSize: '180%', color: '#228b22'}} > 
                          <span style={{color:'#ff8c00', fontWeight: 'bolder'}}>Cardio-health</span> helps you to
                          <br /> 
                          Fight all your <span style={{color:'#ff8c00', fontWeight: 'bolder'}}>cardio</span> problems
                    </div>
                    <div  style={{ verticalAlign: 'text-bottom', paddingTop: '5%', paddingLeft: '17.5%' , textAlign:'middle', fontFamily: 'Verdana', fontSize: '130%'}} > 
                          Get a second opinion by a world renowned team of cardiac specialist
                    </div>
                </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6} style={{marginLeft: '-15%'}}>
                <Image src={Doctor} rounded alt="maja aa gaya" height="640" textAlign='left'/>
            </Col>
        </Row>
        </div>
        )
    }

};