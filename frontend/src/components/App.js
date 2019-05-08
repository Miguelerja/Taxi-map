import React, { Component } from 'react';

import apiCall from '../API/api';

import '../App.css';
import Loading from './Loading';
import Toggler from './Toggler';
import Map from './Map';
import Container from './Container';

export default class App extends Component {
  state = {
    loading: true,
    taxis: null,
    cars: null,
    active: 'taxis',
  };

  async componentDidMount() {
    const { taxis, cars } = await apiCall();
    this.setState({
      cars,
      taxis,
      loading: false,
    });
  };

  toggleActiveList = (list) => {
    this.setState({ active: list });
  };

  render() {
    const { taxis, cars, loading, active } = this.state;

    return (
      <div className='App' data-test='App'>
      {(loading)
        ? <Loading data-test='loading' />
        : 
        <>
          <Toggler handleToggle={this.toggleActiveList} />
          <Map
          />
          <Container />
        </>
      }
      </div>
    );
  };
};

