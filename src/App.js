import React from 'react';
import Introduction from './components/introduction';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import Loginform from './components/loginform.js';
import { Working } from './components/working.js';
import { MyCarousel } from './components/testimonial.js';
import NavigationBar from './components/navigationBar.js';
import ContactModal from './components/contactModal.js';

import { Jumbotron } from 'reactstrap';

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <ContactModal />
        <NavigationBar />
        
        <div id="introduction">
          <Introduction />
        </div>

        <div id="working">
          <Working />
        </div>

        <div id="testimonial">
          <MyCarousel />
        </div>

        <div id="component3">
           <Loginform /> 
        </div>

        <div id="component4">
          <Jumbotron>
            <h1 className="display-3">Joke Cards</h1>
            <p className="lead">
              Welcome to the next billion dollar app taking the world by storm
            </p>
            <hr className="my-2" />
            <p>Prepare to be amused!</p>
            <p className="lead"></p>
          </Jumbotron>
        </div>

        <div id="component5">
          <Jumbotron>
            <h1 className="display-3">Joke Cards</h1>
            <p className="lead">
              Welcome to the next billion dollar app taking the world by storm
            </p>
            <hr className="my-2" />
            <p>Prepare to be amused!</p>
            <p className="lead"></p>
          </Jumbotron>
        </div>
      </div>
    );
  }
}
