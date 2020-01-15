import React from 'react';
import {
    Jumbotron
  } from 'reactstrap';
  
import './App.css';

export default class Introduction extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">Joke Cards</h1>
                    <p className="lead">Welcome to the next billion dollar app taking the world by storm</p>
                    <hr className="my-2" />
                    <p>Prepare to be amused!</p>
                    <p className="lead">
                    </p>
                </Jumbotron>
            </div>
        );
    }

};