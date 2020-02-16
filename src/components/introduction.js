import React from 'react';
import {
    Row, Col
} from 'reactstrap';

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
                <Jumbotron style={{ background: { MobileDoctor }, fontFamily:'helvetica' }}>
                    <span><h3 style={{marginBottom:'0px', color:'#009bd6', fontWeight: 'bolder'}}>Undergoing a</h3></span>
                    <span ><h3 style={{marginTop:'0px', color:'#009bd6', fontWeight: 'bolder'}}>Heart treatment?</h3></span>

                    <div style={{marginTop: '10%'}}>
                    <span style={{fontFamily: 'helvetica'}}>Get a second opinion <br/> by  World renowned team <br/> of  Cardiac Specialist</span>
                    </div>
            
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