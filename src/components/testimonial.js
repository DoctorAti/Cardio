import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Testimonial1 from '../resources/testimonial 1.jpg';
import Testimonial2 from '../resources/testimonial 2.jpg';
import Testimonial3 from '../resources/testimonial 3.jpg';
import PropTypes from "prop-types";
import RightArrow from '../resources/right-arrow.svg'

import '../App.css';

import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";
export class MyCarousel extends React.Component {
  constructor(props) {
    super(props);

      this.comments = [
      {
        image: Testimonial1,
        content: 'My father, Mohit  (59 now)  had cardiac pain. The local doctors suggested going for angioplasty or Bypass surgery. That’s when I heard about cardio-health.com and its special second opinion service. I submitted my father’s angiogram report and within a week got an opinion and what further treatment should be followed. The care manager (Ayush Singh) and Doctor’s team led by Dr Reema Pathak had explained what exact condition was and what treatment should be followed . I am extremely thankful to cardio-health platform for saving my dad from unnecessary surgery and saved a lot of money as well. For anyone who has been suffering from Cardiac problems should take opinion from cardio-health’s expert team. ',
        name: "Shobhit Khare", 
        
      },
      {
        image: Testimonial2,
        content: 'My grand mother (age of 89 years) suffered from chest pain. Not sure of what to do, I searched online for cardio platform and stumble upon cardio-health platform. I immediately signed up for their free call with cardiologist and he (Dr Rangrajan Shetty) advised to carry out certain test. We did certain test and submitted on the platform.Now my grand mother is feeling much better and I am loving such platform which connects with local cardiologist as well as renowned cardiologist from other cities. Thank you cardio-health team. I owe my grand mom better health to you guys. Kudos',
        name: "Ameena Siglipilli", 
        
      },
      {
        image: Testimonial3,
        content: 'I myself was suffering from angina and got diagnosed with coronary arterial disease. Since I was young, I felt to take specialized opinion from cardio-health platform.  The Care Manager (Anant Yadav) was very helpful. He helped connect to Dr Anish Jain which prescribed me set of medicine to reduce plaque and cholesterol. I am very happy with cardio-health.in and would rate them 10/10.',
        name: "Lalit Patel", 
        
      },
    ];

    this.state = {
      testimonials: this.createChildren(),
      activeItemIndex: 0,
      numberOfCards: this.numberOfCards()
    };
  }

  createChildren = () =>
    range(this.comments.length).map(i => (
      <Testimonial
      image={this.comments[i].image}
      content={this.comments[i].content}
      name={this.comments[i].name}
    />
    ));

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });
  
  numberOfCards() {
    if(isMobile)
     return 1;
    return 1;
  }

  render() {
    let { testimonials, activeItemIndex } = this.state;
    //console.log('maja aa  gaya    ' + this.state.children);
    return (
      <div style={{margin: '7.5%'}}>
      <div style={{textAlign: 'center'}}>
        <h1>Testimonials</h1>
      </div>
      <ItemsCarousel
        // Placeholder configurations
        numberOfPlaceholderItems={3}
        minimumPlaceholderTime={1000}
       
        // Carousel configurations
        numberOfCards={this.state.numberOfCards}
        gutter={12}
        freeScrolling={true}
        infiniteLoop={true}

        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={<button style={{backgroundColor: '#000080', color: '#ffffff', fontWeight: 'bolder'}}>{'>>'}</button>}
        leftChevron={<button style={{backgroundColor: '#000080', color: '#ffffff', fontWeight: 'bolder'}}>{'<<'}</button>}
        outsideChevron={false}
      >
        {testimonials}
      </ItemsCarousel>
      </div>
    );
  }
}




function Testimonial(props) {
  const { image, content, name } = props;

  if(isMobile){
    return (
      <div className="testimonial-card">
        <img src={image} alt="Not found" className="testimonial-image" />
        <div className="testimonial-content-mobile">
          <h3>{name}</h3>
           {content} 
        </div>
      </div>
    );
  }
  return (
    <div className="testimonial-card">
      <img src={image} alt="Not found" className="testimonial-image" />
      <div className="testimonial-content">
        <h3>{name}</h3>
         {content} 
      </div>
    </div>
  );

}

Testimonial.propTypes = {
  image: PropTypes.any.isRequired,
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};
