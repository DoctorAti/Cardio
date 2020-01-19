import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import rightArrow from '../resources/rightArrow.jpg';
import panna from '../resources/panna.jpg';
import { Image } from 'react-bootstrap';
import Banda from '../resources/testimonial-carousel-1.jpg';

export class MyCarousel extends React.Component {
  constructor(props) {
    super(props);

    var comment =
      'My uncle, Mohan Amarnani (77 now) and has almost recovered. He has resumed with his usual routine. I thank Aman (the care manager) and Onco.com for the help they have provided and are still providing selflessly till date. It feels really great to have such people around who are willing to help you without any personal gains.';
    this.comments = [comment, comment, comment, comment, comment, comment];
    this.state = {
      children: this.createChildren(6),
      activeItemIndex: 0
    };
  }

  createChildren = n =>
    range(n).map(i => (
      <div key={i} style={{ height: 200, background: '#e7e7e7' }}>
        <Image src={Banda} roundedCircle />
        {this.comments[i]}
      </div>
    ));

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  render() {
    let { children, activeItemIndex } = this.state;
    console.log('maja aa  gaya    ' + this.state.children);
    return (
      <ItemsCarousel
        // Placeholder configurations
        enablePlaceholder
        numberOfPlaceholderItems={5}
        minimumPlaceholderTime={1000}
        placeholderItem={
          <div style={{ height: 200, background: '#900' }}>Placeholder</div>
        }
        // Carousel configurations
        numberOfCards={3}
        gutter={12}
        showSlither={true}
        firstAndLastGutter={true}
        freeScrolling={false}
        // Active item configurations
        requestToChangeActive={this.changeActiveItem}
        activeItemIndex={activeItemIndex}
        activePosition={'center'}
        chevronWidth={24}
        rightChevron={<button>{'>>'}</button>}
        leftChevron={<button>{'<<'}</button>}
        outsideChevron={false}
      >
        {children}
      </ItemsCarousel>
    );
  }
}

// class UserComment extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { fadeIn: false };
//       }
//
//     render() {
//         let {imaginary, setup } = this.props.humor;
//         return (
//             <div>
//               <Button
//               type="button"
//               data-toggle="modal"
//               data-target="#myModal"
//               class="btn btn-default" style={{backgroundColor:'#FFFFFF', borderColor:'white',}}>
//
//               <div class="container text-center">
//                 <Image src={imaginary} style={{height:"10vh", width:"10vh", textAlign:"centre" }} rounded/>
//               </div>
//               <div style={{color:'black'}}>
//                 {setup}
//               </div>
//
//               </Button>
//             </div>
//         );
//     }
// };
