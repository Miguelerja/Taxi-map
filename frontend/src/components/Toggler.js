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

const mapStateToProps = (props) => {
  console.log(props);
};

export default connect(mapStateToProps, { setActiveData })(Toggler);
