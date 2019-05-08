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
    <div className='card'>
      <img className='logo' src='/Images/mytaxi-logo-pos.png' alt='myTaxi Logo' />
      <p>{id}</p>
      <p>{state}</p>
    </div>
  );
};

TaxiCard.propTypes = {
  id: propTypes.number.isRequired,
  state: propTypes.string.isRequired,
};

export function CarCard (props) {
  const { 
    address,
    exterior,
    interior,
    name,
    fuel,
  } = props;

  return (
    <div className='card'>
      <img className='logo' src='/Images/car2go-logo.png' alt='car2go logo' />
      <p>{name}</p>
      <p>{address}</p>
      <p>{determineState(interior, exterior)}</p>
      <p>{determineFuelLevel(fuel)}</p>
    </div>
  );
};

CarCard.propTypes = {
  address: propTypes.string.isRequired,
  exterior: propTypes.string.isRequired,
  interior: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  fuel: propTypes.number.isRequired,
};
