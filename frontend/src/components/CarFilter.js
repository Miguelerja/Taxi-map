import React from 'react';
import { connect } from 'react-redux';

import { filterCarsByFuel, filterCarsByState } from '../actions';
import './styles/carFilter.css';

const CarFilter = (props) => {
  const { fuelFilter, stateFilter, filterCarsByFuel, filterCarsByState } = props;
  const generateClassName = (filtered) => {
    if (filtered) {
      return 'checkbox checked'; 
    } 
    return 'checkbox';
  };

  return (
    <div className='car-filter'>
      <h3>Good overall state only</h3>
      <button 
        className={generateClassName(stateFilter)} 
        onClick={() => filterCarsByState(!stateFilter)} />
      <h3>At least half charged only</h3>
      <button 
        className={generateClassName(fuelFilter)} 
        onClick={() => filterCarsByFuel(!fuelFilter)} />
    </div>
  );
};

const mapStateToProps = ({ filterCar }) => {
  return {
    fuelFilter: filterCar.fuelFilter,
    stateFilter: filterCar.stateFilter,
  };
};

export default connect(mapStateToProps, { filterCarsByFuel, filterCarsByState })(CarFilter);
