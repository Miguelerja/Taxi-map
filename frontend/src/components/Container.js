import React from 'react';
import propTypes from 'prop-types';

import { TaxiCard, CarCard } from './Cards';
import './styles/container.css';

const listItems = (items, active) => {
  if (active === 'taxis') {
    return items.map((item) => {
      const {
        id,
        state,
      } = item;

      return <TaxiCard id={id} state={state} />
    });
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
        <CarCard 
          address={address}
          exterior={exterior}
          interior={interior}
          name={name}
          fuel={fuel}
        />
      );
    });
  };
}

const Container = (props) => {
  const { active, taxis, cars } = props;

  return (
    <div className='container'>
      {(active === 'taxis')
        ? listItems(taxis, active)
        : listItems(cars, active)
      }
    </div>
  );
};

Container.propTypes = {
  taxis: propTypes.string.isRequired,
  cars: propTypes.string.isRequired,
  active: propTypes.string.isRequired,
};

export default Container;
