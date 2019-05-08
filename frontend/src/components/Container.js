import React from 'react';
import propTypes from 'prop-types';

import { determineState, determineFuelLevel } from '../helpers/utils';

const TaxiCard = (props) => {
  const {
    id,
    state,
  } = props;

  return (
    <div className='card'>
      <img src='/Images/mytaxi-logo-pos.png' alt='myTaxi Logo' />
      <p>{id}</p>
      <p>{state}</p>
    </div>
  );
};

TaxiCard.propTypes = {
  id: propTypes.number.isRequired,
  state: propTypes.string.isRequired,
};

const CarCard = (props) => {
  const { 
    address,
    exterior,
    interior,
    name,
    fuel,
  } = props;

  return (
    <div className='card'>
      <img src='/public/Images/car2go-logo.png' alt='car2go logo' />
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

const listItems = (items, active) => {
  if (active === 'taxis') {
    return items.map((item) => {
      const {
        id,
        state,
      } = item;
    });

    return (
    <TaxiCard />
    )
  } else {
    return items.map((item) => {
      const {
        address,
        exterior,
        interior,
        name,
        fuel,
      } = item;

      return (

      );
    });
  };
}

const Container = (props) => {
  const { active } = props;

  return (
    <div>
      {listItems()}
    </div>
  )
};

export default Container;
