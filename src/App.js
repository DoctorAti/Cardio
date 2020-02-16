import React from 'react';
import Introduction from './components/introduction';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Working } from './components/working.js';
import { MyCarousel } from './components/testimonial.js';
import NavigationBar from './components/navigationBar.js';
import ContactModal from './components/contactModal.js';
import { DoctorCarousel } from './components/doctors.js';
import Products from './components/products.js';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Terms from './components/terms';
import Services from './components/services';
import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
import WorkingVideo from './components/workingVideo';

import ReactGA from 'react-ga';
import Advertisment from './components/advertisment';
// import auth from './auth.ts'; // Sample authentication provider

const trackingId = 'UA-158622598-1'; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);
ReactGA.set({
  // userId: auth.currentUserId(),
  // any data that is relevant to the user session
  // that you would like to track with google analytics
})

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <div>
              <ContactModal />
              <NavigationBar />
              <Route exact path="/">
                <div id="introduction">
                  <Introduction />
                </div>

                <div id="products">
                  <Products />
                </div>
                <div id="advertisment">
                  <Advertisment />
                </div>
                <div id="working">
                  <Working />
                  <WorkingVideo />
                </div>

                <div id="testimonial">
                  <MyCarousel />
                </div>

                <div id="ourDoctors">
                  <DoctorCarousel />
                </div>
              </Route>
              <Route exact path="/terms-and-conditions">
                <Terms />
              </Route>
              <Route exact path="/privacy-policy">
                <Services />
              </Route>
              <Footer />
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
