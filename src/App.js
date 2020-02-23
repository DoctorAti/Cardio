import React, { lazy, Suspense } from 'react';
import Introduction from './components/introduction';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Working } from './components/working.js';
import { MyCarousel } from './components/testimonial.js';
//  import NavigationBar from './components/navigationBar.js';
import ContactModal from './components/contactModal.js';
import { DoctorCarousel } from './components/doctors.js';
import Products from './components/products.js';

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Terms from './components/terms';
import Services from './components/services';
//  import Footer from './components/footer';
import ScrollToTop from './components/ScrollToTop';
//  import WorkingVideo from './components/workingVideo';

import ReactGA from 'react-ga';
import Advertisment from './components/advertisment';

// const Introduction = lazy(() => import('./components/introduction'));
// const Working = lazy(()=> import('./components/working'));
const WorkingVideo = lazy(() => import('./components/workingVideo'));
// const MyCarousel = lazy(()=> import('./components/testimonial'));
// const DoctorCarousel = lazy(()=> import('./components/doctors'));
const Footer = lazy(() => import('./components/footer'));
const NavigationBar = lazy(() => import('./components/navigationBar'));

function initializeReactGA() {
  ReactGA.initialize('UA-158622598-1');
  ReactGA.pageview('/homepage');
}

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <div>
              <ContactModal />
              <Suspense fallback={<div>Loading....</div>}>
                <NavigationBar />
              </Suspense>
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
                  <Suspense fallback={<div>Loading.....</div>}>
                    <Working />
                  </Suspense>
                  <Suspense fallback={<div>Loading.....</div>}>
                    <WorkingVideo />
                  </Suspense>
                </div>

                <div id="testimonial">
                  <Suspense fallback={<div>Loading.....</div>}>
                    <MyCarousel />
                  </Suspense>
                </div>

                <div id="ourDoctors">
                  <Suspense fallback={<div>Loading.....</div>}>
                    <DoctorCarousel />
                  </Suspense>
                </div>
              </Route>
              <Route exact path="/terms-and-conditions">
                <Terms />
              </Route>
              <Route exact path="/privacy-policy">
                <Services />
              </Route>
              <Suspense fallback={<div>Loading.....</div>}>
                <Footer />
              </Suspense>
            </div>
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}
