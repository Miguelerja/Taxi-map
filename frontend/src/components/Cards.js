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
    address,
    exterior,
    interior,
    name,
    fuel,
  } = props;

  const fueltStatus = determineFuelLevel(fuel);
  const conservationStatus = determineState(interior, exterior);

  return (
    <div className='card'>
      <img className='logo' src='/Images/car2go-logo.png' alt='car2go logo' />
      <p>{name}</p>
      <p>{address}</p>
      <p className={conservationStatus.styling}>{conservationStatus.description}</p>
      <p className={fueltStatus.styling}>{fueltStatus.description}</p>
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
