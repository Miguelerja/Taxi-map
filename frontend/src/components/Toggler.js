import React from 'react';
import propTypes from 'prop-types';

const Toggler = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.handleToggle(event.target.name);
  };

  return (
    <div className='toggler' data-test='toggler'>
      <button 
        onClick={handleClick}
        className='btn' 
        name='taxis'
        data-test='taxis'>MyTaxi</button>
      <button 
        onClick={handleClick}
        className='btn' 
        name='cars'
        data-test='cars'>Car2Go</button>
    </div>
  );
};

Toggler.propTypes = {
  handleToggle: propTypes.func.isRequired,
}

export default Toggler;
