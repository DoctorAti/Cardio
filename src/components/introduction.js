import React from 'react';
import {
    Row, Col
} from 'reactstrap';

import { Jumbotron } from 'reactstrap';

import '../App.css';
import { Image } from 'react-bootstrap';
import Doctor from '../resources/onco_doctor.png'
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

                    <hr className="my-2" />
                    <p>It uses utility classes for <br/>typography and spacing to <br/>space content out within the<br/> larger container.</p>
                    <p className="lead">
                    </p>
                </Jumbotron>
            </div>

        }
        return <Row>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>


                <div className="container">
                    <h1 style={{ verticalAlign: 'text-bottom', paddingTop: '20%', paddingLeft: '20%' , textAlign:'middle'}} > Your heart is priceless.<br /> We will help you beat it</h1>
                    <h4>
                        Cardio Health.com helps you with all of your Cardiac problems. Cardiology diagnosis and treatment options available at your fingertips.
                    </h4>
                </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                <Image src={Doctor} rounded alt="maja aa gaya" />
            </Col>

        </Row>
    }

};