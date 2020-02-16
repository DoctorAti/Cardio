import React, { Component } from 'react';

class advertisment extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div style={{ backgroundColor: '#f9f9f9' }}>
        <div
          className="container"
          style={{ justifyContent: 'center', alignContent: 'center' }}
        >
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col">
              <h1 style={{ color: '#17a2b8' }}>400+</h1>
              <h6>
                No. of{' '}
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bolder',
                    font: 'sans-serif'
                  }}
                >
                  Doctors
                </span>{' '}
                on Platform
              </h6>
            </div>
            <div className="col">
              <h1 style={{ color: '#17a2b8' }}>800+</h1>
              <h6>
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bolder',
                    font: 'sans-serif'
                  }}
                >
                  Medical Labs
                </span>{' '}
                in our Network
              </h6>
            </div>
          </div>
          {/* <br></br> */}
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col">
              <h1 style={{ color: '#17a2b8' }}>&gt;10,000</h1>
              <h6>
                &nbsp;&nbsp;
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bolder',
                    font: 'sans-serif'
                  }}
                >
                  Patients
                </span>{' '}
                served
              </h6>
            </div>
          </div>
          {/* <br></br> */}
          <div className="row" style={{ textAlign: 'center' }}>
            <div className="col">
              <h1 style={{ color: '#17a2b8' }}>&gt;7,000</h1>
              <h6>
                &nbsp;&nbsp;
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bolder',
                    font: 'sans-serif'
                  }}
                >
                  Satisfied{' '}
                </span>
                customers
              </h6>
            </div>
            <div className="col">
              <h1 style={{ color: '#17a2b8' }}>300+</h1>
              <h6>
                <span
                  style={{
                    color: 'black',
                    fontWeight: 'bolder',
                    font: 'sans-serif'
                  }}
                >
                  Medical Centres{' '}
                </span>
                across India
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default advertisment;
