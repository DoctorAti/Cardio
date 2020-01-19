import React from 'react';
import doctor from '../resources/doctor.svg'
import upload from '../resources/upload.svg'
import support from '../resources/support.svg'
import monitor from '../resources/monitor.svg'

import '../App.css';
//import Work from './work.js'
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

  import { Image, Button} from 'react-bootstrap';

export class Working extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      jokes: [
        {
          imaginary: monitor,
          setup: "Get in touch with us and submit your problem", 
          
        },
        {
          imaginary: support,
          setup: "Our Case Manager will call you and explain you how platform works",
          
        },
        {
          imaginary: upload,
          setup: "Submit your test reports online",
          
        },
        {
          imaginary: doctor,
          setup: "Get a second opinion from our team of renowned cardiologists",
          
        }
      ]

      }
    }
    render() {
        
        let jokeCards = this.state.jokes.map(humor => {
            return (
              // <div className="">
              <Col xs={6} sm={6} md={3} lg={3} xl={3} >
                  <Work humor={humor} />
              </Col>
              // </div>
            )
          });

          return (
              <div>
                <div id="HowItWorks" style={{textAlign: "center"}}>
                    <h1>How It Works?</h1>
                </div>
                <Container fluid>
                <Row>
                    {jokeCards}
                </Row>
                </Container>
              
              </div>
          )
    }
    
};

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = { fadeIn: false };
      }

    render() {
        let {imaginary, setup } = this.props.humor;
        return (
            <div>
              <Button 
              type="button"
              data-toggle="modal"
              data-target="#myModal"
              class="btn btn-default" style={{backgroundColor:'#FFFFFF', borderColor:'white',}}>

              <div class="container text-center">
                <Image src={imaginary} style={{height:"10vh", width:"10vh", textAlign:"centre" }} rounded/>
              </div>
              <div style={{color:'black'}}>
                {setup}
              </div>
                      
              </Button>
            </div>
        );
    }
};