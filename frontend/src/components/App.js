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
  componentDidMount() {
    this.props.getData();
  };

  taxiAvailabilityFilter = () => {

  };

  render() {
    const { active, loading, taxis, cars } = this.props;

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

const mapStateToProps = ({ initialData, toggleData }) => {
  return {
    taxis: initialData.taxis,
    cars: initialData.cars,
    active: toggleData.payload,
    loading: initialData.taxis === undefined,
  };
};

export default connect(mapStateToProps, { getData })(App);
