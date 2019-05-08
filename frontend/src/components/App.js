import React, { Component } from 'react';
import '../App.css';
import Loading from './Loading';

export default class App extends Component {
  state = {
    loading: true,
    taxis: null,
    cars: null,
  };

  

  render() {
    const { taxis, cars, loading } = this.state;

    return (
      <div className='App' data-test='App'>
      {(loading)
        ? Loading
      }
      </div>
    );
  };
};

