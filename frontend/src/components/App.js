import React, { Component } from 'react';

import apiCall from '../API/api';

import '../App.css';
import Loading from './Loading';
import Map from './Map';

export default class App extends Component {
  state = {
    loading: true,
    taxis: null,
    cars: null,
  };

  async componentDidMount() {
    const { taxis, cars } = await apiCall();
    this.setState({
      cars,
      taxis,
      loading: false,
    });
  };


  render() {
    const { taxis, cars, loading } = this.state;

    return (
      <div className='App' data-test='App'>
      {(loading)
        ? <Loading data-test='loading' />
        : <Map />
      }
      </div>
    );
  };
};

