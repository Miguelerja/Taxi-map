import React from 'react';
import { connect } from 'react-redux';

import { filterTaxis } from '../actions';
import './styles/taxiFilter.css';

const TaxiFilter = (props) => {
  const { filtered, filterTaxis } = props;
  const className = (filtered) ? 'checkbox checked' : 'checkbox';

  return (
    <div className='taxi-filter'>
      <h3>Available Taxis only</h3>
      <button 
        className={className} 
        onClick={() => filterTaxis(!filtered)} />
    </div>
  );
};

const mapStateToProps = ({ filterTaxis }) => {
  return {
    filtered: filterTaxis,
  };
};

export default connect(mapStateToProps, { filterTaxis })(TaxiFilter);
