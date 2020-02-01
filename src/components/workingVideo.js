import React from 'react';
import Iframe from 'react-iframe'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";

import '../App.css';

export default class WorkingVideo extends React.Component {
  render() {
    if(isMobile){
      return (
        <div style={{textAlign: 'center'}}>
        <Iframe url="https://www.youtube.com/embed/7pMcnAuU1YU"
        width="100%"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        allowFullScreen/>
      </div>  
      );
    }
    else{
      return (
        <div style={{textAlign: 'center', margin: '7.5%'}} >
        <Iframe url="https://www.youtube.com/embed/7pMcnAuU1YU"
        height="400px"
        width='600px'
        id="myId"
        allowFullScreen
        className="myClassname"
        display="initial"
        allowFullScreen/>
      </div>  
      );
    }
    
  }
}
