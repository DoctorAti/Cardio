import React from 'react';

import './App.css';
//import Work from './work.js'
import {
    Container,
    Row,
    Col
  } from 'reactstrap';

  import {
    Card,
    CardBody,
    CardTitle,
    CardText,
    Button,
    Fade
} from 'reactstrap';

export class Working extends React.Component {
    constructor(props) {
        super(props);
    this.state = {
      jokes: [
        {
          setup: "Click on 'contact us' at the top right of website. And Fill the details",
          punchline: "Don't worry. We maintain highest standard of data privacy"
        },
        {
          setup: "Our case manager will call you and explain about the process",
          punchline: "Don't worry. Our case managers are well trained and equiped with latest knowledge"
        },
        {
          setup: "Submit case reports online",
          punchline: "Don't worry. Don't worry we will keep your data secret"
        },
        {
          setup: "Get a second Opinion from a team",
          punchline: "Don't worry. Our Doctors are selected from best"
        }
      ]

      }
    }
    render() {
        
        let jokeCards = this.state.jokes.map(humor => {
            return (
              <Col>
                  <Work humor={humor} />
              </Col>
            )
          });

          return (
              <div>
                <div id="HowItWorks">
                    <h1>How It Works</h1>
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
        this.toggle = this.toggle.bind(this);
      }

    render() {
        let { setup, punchline } = this.props.humor;
        return (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{setup}</CardTitle>
                        <Button color="primary" onClick={this.toggle}>Have a Doubt</Button>
                        <Fade in={this.state.fadeIn} className='my-2'>
                            <CardText>{punchline}</CardText>
                        </Fade>
                    </CardBody>
                </Card>
            </div>
        );
    }

    toggle() {
        this.setState({
          fadeIn: !this.state.fadeIn
        });
    }
};