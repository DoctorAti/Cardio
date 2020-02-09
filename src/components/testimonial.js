import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import Banda from '../resources/testimonial-carousel-1.jpg';
import Testimonial1 from '../resources/testimonial1.jpg';
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
        image: RightArrow,
        content: 'My chacha, Mohan Amarnani (77 now) and has almost recovered. He has resumed with his usual routine. I thank Aman (the care manager) and Onco.com for the help they have provided and are still providing selflessly till date. It feels really great to have such people around who are willing to help you without any personal gains.',
        name: "Jeet Parekh girlfriend", 
        
      },
      {
        image: Banda,
        content: 'My bhatija, Mohan Amarnani (77 now) and has almost recovered. He has resumed with his usual routine. I thank Aman (the care manager) and Onco.com for the help they have provided and are still providing selflessly till date. It feels really great to have such people around who are willing to help you without any personal gains.',
        name: "gujju baba", 
        
      },
      {
        image: Banda,
        content: 'My bhanja, Mohan Amarnani (77 now) and has almost recovered. He has resumed with his usual routine. I thank Aman (the care manager) and Onco.com for the help they have provided and are still providing selflessly till date. It feels really great to have such people around who are willing to help you without any personal gains.',
        name: "mota champ", 
        
      }
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
