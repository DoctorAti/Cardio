import React from 'react';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
import cardioLogist1 from '../resources/cardiologist 1.jpg';
import cardioLogist2 from '../resources/cardiologist 2.jpeg';
import cardioLogist3 from '../resources/cardiologist 3.jpg';
import cardioLogist5 from '../resources/cardiologist 5.jpg';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Image from 'react-bootstrap/Image';
import '../App.css';

import { isMobile } from 'react-device-detect';
export class DoctorCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.comments = [
      {
        image: cardioLogist1,
        name: 'Dr. Rangrajan Shetty',
        work: 'Cardio Thoracic Surgeon',
        experience: '28 years experience',
        degree: 'MBBS | MD | DNB'
      },
      {
        image: cardioLogist2,
        name: 'Dr. Reema Pathak',
        work: 'Senior Interventional Cardiologist',
        experience: '16 years experience',
        degree: 'MD | DM | FICC | FSCAI | MEAPCI'
      },
      {
        image: cardioLogist3,
        name: 'Dr. Mohsin Abdullah Khan',
        work: 'Senior Cardiac Surgeon',
        experience: '14 years experience',
        degree: 'MBBS | MD | DNB | PDCC'
      },
      {
        image: cardioLogist5,
        name: 'Dr. Anish Jain',
        work: 'Consulting Cardiologist',
        experience: '12 year experience',
        degree: 'MD | DM | DNB | FACC'
      }
    ];

    this.state = {
      doctors: this.createChildren(),
      activeItemIndex: 0,
      numberOfCards: this.numberOfCards(),
      gutterSpace: this.gutterSpace()
    };
  }

  createChildren = () =>
    range(this.comments.length).map(i => (
      <Doctor
        image={this.comments[i].image}
        name={this.comments[i].name}
        work={this.comments[i].work}
        experience={this.comments[i].experience}
        degree={this.comments[i].degree}
      />
    ));

  changeActiveItem = activeItemIndex => this.setState({ activeItemIndex });

  numberOfCards() {
    if (isMobile) return 1;
    return 4;
  }

  gutterSpace() {
    if (isMobile) return 25;
    return 100;
  }

  render() {
    let { doctors, activeItemIndex } = this.state;
    //console.log('maja aa  gaya    ' + this.state.children);
    return (
      <div style={{ margin: '7.5%' }}>
        <div style={{ textAlign: 'center', margin: '5%' }}>
          <h1>Our Leadership Team</h1>
        </div>
        <ItemsCarousel
          // Placeholder configurations
          numberOfPlaceholderItems={3}
          minimumPlaceholderTime={1000}
          // Carousel configurations
          numberOfCards={this.state.numberOfCards}
          gutter={this.state.gutterSpace}
          freeScrolling={true}
          // Active item configurations
          requestToChangeActive={this.changeActiveItem}
          activeItemIndex={activeItemIndex}
          activePosition={'center'}
          chevronWidth={24}
          rightChevron={
            <button
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bolder',
                borderRadius: '5px',
                borderColor: 'black',
                fontFamily: 'Arial'
              }}
            >
              {'>>'}
            </button>
          }
          leftChevron={
            <button
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: 'bolder',
                borderRadius: '5px',
                borderColor: 'black',
                fontFamily: 'Arial'
              }}
            >
              {'<<'}
            </button>
          }
          outsideChevron={false}
        >
          {doctors}
        </ItemsCarousel>
      </div>
    );
  }
}

function Doctor(props) {
  const { image, name, work, experience, degree } = props;

  return (
    <div className="doctor-box" style={{ textAlign: 'center' }}>
      <Image src={image} fluid />
      <div style={{ marginTop: '5%' }}>
        <span
          style={{ fontSize: '120%', fontWeight: 'bolder', marginTop: '5%' }}
        >
          {name}
        </span>
        <br />
        <span>{work}</span>
        <br />
        <span>{experience} </span>
        <br />
        <span>{degree}</span>
      </div>
    </div>
  );
}

Doctor.propTypes = {
  image: PropTypes.any.isRequired,
  name: PropTypes.string.isRequired,
  work: PropTypes.string.isRequired,
  experience: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired
};
