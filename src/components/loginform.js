import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';
//jeeet is a good boi
class loginform extends Component {
  render() {
    return (
      <Jumbotron>
        <div className="row">
          <div className="col md-6">
            <h1 className="display-3">Joke Cards</h1>
            <p className="lead">
              Welcome to the next billion dollar app taking the world by storm
            </p>
            <hr className="my-2" />
            <p>Prepare to be amused!</p>
            <p className="lead"></p>
          </div>
          <div className="col">
            <div className="md-form">
              <input
                type="text"
                id="email"
                name="email"
                className="form-control validate"
                placeholder="Your Name"
              ></input>
              <br />
              <input
                type="text"
                name="password"
                className="form-control validate"
                placeholder="Phone No"
              ></input>
              <br />
              <div class="dropdown">
                <button
                  class="btn btn-info dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Please Select Your question
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    question 1
                  </a>
                  <a class="dropdown-item" href="#">
                    question 2
                  </a>
                  <a class="dropdown-item" href="#">
                    question 3
                  </a>
                </div>
              </div>
            </div>
            <br />
            <button type="button" class="btn btn-warning" data-dismiss="modal">
              Submit
            </button>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default loginform;
