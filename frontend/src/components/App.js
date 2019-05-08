import React, { Component } from 'react';

import apiCall from '../API/api';

import '../App.css';
import Loading from './Loading';

export default class App extends Component {
  state = {
    loading: true,
    taxis: null,
    cars: null,
  };

  async componentDidMount() {
    const { taxis, cars } = await apiCall();
    console.log(taxis);
    console.log(cars);
  };


  render() {
    const { taxis, cars, loading } = this.state;

    return (
      <div className='App' data-test='App'>
      {(loading)
        ? <Loading data-test='loading' />
        : <p>loaded</p>
      }
      </div>
    );
  };
};

