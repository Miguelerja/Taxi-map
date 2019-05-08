import React from 'react';
import propTypes from 'prop-types';

import { determineState, determineFuelLevel } from '../helpers/utils';
import './styles/cards.css'

export function TaxiCard (props) {
  const {
    id,
    state,
  } = props;

  return (
    <div className='card card-mytaxi'>
      <img className='logo' src='/Images/mytaxi-logo-pos.png' alt='myTaxi Logo' />
      <h4>Taxi ID</h4>
      <p>{id}</p>
      <h4>Status</h4>
      <p className={(state === 'ACTIVE') ? 'success' : 'danger' }>{state}</p>
    </div>
  );
};

TaxiCard.propTypes = {
  id: propTypes.number.isRequired,
  state: propTypes.string.isRequired,
};

export function CarCard (props) {
  const { 
    exterior,
    interior,
    name,
    fuel,
  } = props;

  const fueltStatus = determineFuelLevel(fuel);
  const conservationStatus = determineState(interior, exterior);

  return (
    <div className='card card-car2go'>
      <img className='logo' src='/Images/car2go-logo.png' alt='car2go logo' />
        <p className='license'>{name}</p>
      <div className='vehicle-status'>
        <div className='status-container'>
          <h4>Car Status</h4>
          <p className={conservationStatus.styling}>{conservationStatus.description}</p>
        </div>
        <div className='status-container'>
          <h4>Fuel level</h4>
          <p className={fueltStatus.styling}>{fueltStatus.description}</p>
        </div>
      </div>
    </div>
  );
};

CarCard.propTypes = {
  exterior: propTypes.string.isRequired,
  interior: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  fuel: propTypes.number.isRequired,
};
