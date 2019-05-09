import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from '../actions';
import './styles/App.css';
import { determineState, determineFuelLevel } from '../helpers/utils';
import Loading from './Loading';
import Toggler from './Toggler';
import Map from './Map';
import TaxiFilter from './TaxiFilter';
import CarFilter from './CarFilter';
import Container from './Container';

class App extends Component {
  componentDidMount() {
    this.props.getData();
  };

  render() {
    const { active, loading, taxis, cars, onlyActiveTaxis, filterByFuelLevel, filterByState } = this.props;

    const filterTaxis = (onlyActiveTaxis, taxis) => {
      if(onlyActiveTaxis) {
        return taxis.filter((taxi) => taxi.state === 'ACTIVE');
      };

      return taxis;
    };

    const filterCars = (filterByFuelLevel, filterByState, cars) => {
      if(filterByFuelLevel && filterByState) {
        return cars.filter((car) => {
          const { description: fuel } = determineFuelLevel(car.fuel);
          const { description: state } = determineState(car.interior, car.exterior);
          return fuel !== 'Low' && state === 'Excellent';
        });
      };

      if(filterByFuelLevel && !filterByState) {
        return cars.filter((car) => {
          const { description: fuel } = determineFuelLevel(car.fuel);
          return fuel !== 'Low';
        });
      };

      if(filterByState && !filterByFuelLevel) {
        return cars.filter((car) => {
          const { description: state } = determineState(car.interior, car.exterior);
          return state === 'Excellent';
        });
      };

      return cars;
    };

    return (
      <div className='App' data-test='App'>
      {(loading)
        ? <Loading data-test='loading' />
        : 
        <>
          <Toggler />
          <Map
            taxis={filterTaxis(onlyActiveTaxis, taxis)}
            cars={filterCars(filterByFuelLevel, filterByState, cars)}
            active={active}
          />
          {(active === 'taxis')
            ? <TaxiFilter />
            : <CarFilter />
          }
          <Container 
            taxis={filterTaxis(onlyActiveTaxis, taxis)}
            cars={filterCars(filterByFuelLevel, filterByState, cars)}
            active={active}
          />
        </>
      }
      </div>
    );
  };
};

const mapStateToProps = ({ initialData, toggleData, filterTaxis, filterCar }) => {
  return {
    taxis: initialData.taxis,
    cars: initialData.cars,
    active: toggleData,
    onlyActiveTaxis: filterTaxis,
    filterByFuelLevel: filterCar.fuelFilter,
    filterByState: filterCar.stateFilter,
    loading: initialData.taxis === undefined,
  };
};

export default connect(mapStateToProps, { getData })(App);
