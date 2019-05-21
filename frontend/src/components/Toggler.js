import React from 'react';
import { connect } from 'react-redux';

import { setActiveData } from '../actions';
import './styles/toggler.css';

const Toggler = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    props.setActiveData(event.target.name);
  };

  return (
    <div className='toggler'>
      <button 
        onClick={handleClick}
        className='btn' 
        name='taxis'
        >MyTaxi</button>
      <button 
        onClick={handleClick}
        className='btn' 
        name='cars'
        >Car2Go</button>
    </div>
  );
};

export default connect(null, { setActiveData })(Toggler);
