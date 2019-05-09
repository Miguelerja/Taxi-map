import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import './styles/App.css';
import Loading from './Loading';
import Toggler from './Toggler';
import Map from './Map';
import { TaxiFilter } from './Filter';
import Container from './Container';

class App extends Component {
  state = {
    loading: true,
    active: 'taxis',
  };


  componentDidMount() {
    this.props.getData();
  };

  toggleActiveList = (list) => {
    this.setState({ active: list });
  };

  taxiAvailabilityFilter = () => {

  };

  render() {
    const { loading, active } = this.state;
    const { taxis, cars } = this.props;

    return (
      <div className='App' data-test='App'>
      {(loading)
        ? <Loading data-test='loading' />
        : 
        <>
          <Toggler handleToggle={this.toggleActiveList} />
          <Map
            taxis={taxis}
            cars={cars}
            active={active}
          />
          <TaxiFilter availabilityFilter={this.taxiAvailabilityFilter} />
          <Container 
            taxis={taxis}
            cars={cars}
            active={active}
          />
        </>
      }
      </div>
    );
  };
};

const mapStateToProps = ({ initialData }) => {
  return {
    taxis: initialData.taxis,
    cars: initialData.cars,
  };
};

export default connect(mapStateToProps, { getData })(App);
