import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import './styles/App.css';
import Loading from './Loading';
import Toggler from './Toggler';
import Map from './Map';
import TaxiFilter from './TaxiFilter';
import Container from './Container';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  };

  render() {
    const { active, loading, taxis, cars, taxisFiltered } = this.props;

    const filterTaxis = (taxisFiltered, taxis) => {
      if(taxisFiltered) {
        return taxis.filter((taxi) => taxi.state === 'ACTIVE');
      };

      return taxis;
    };


    return (
      <div className='App' data-test='App'>
      {(loading)
        ? <Loading data-test='loading' />
        : 
        <>
          <Toggler />
          <Map
            taxis={filterTaxis(taxisFiltered, taxis)}
            cars={cars}
            active={active}
          />
          <TaxiFilter availabilityFilter={this.taxiAvailabilityFilter} />
          <Container 
            taxis={filterTaxis(taxisFiltered, taxis)}
            cars={cars}
            active={active}
          />
        </>
      }
      </div>
    );
  };
};

const mapStateToProps = ({ initialData, toggleData, filterTaxis }) => {
  return {
    taxis: initialData.taxis,
    cars: initialData.cars,
    active: toggleData,
    taxisFiltered: filterTaxis,
    loading: initialData.taxis === undefined,
  };
};

export default connect(mapStateToProps, { getData })(App);
