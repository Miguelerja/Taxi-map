import React, { Component } from 'react';
import propTypes from 'prop-types';

export class TaxiFilter extends Component {
  state = {
    checked: false
  };

  handleFilter = async () => {
    await this.setState({
      checked: !this.state.checked,
    });
    this.props.availabilityFilter(this.state.checked);
  };

  render() {
    const { checked } = this.state;

    return (
      <div className='filter taxi-filter'>
        <h3>Show only available Taxis</h3>
        <button 
          className='checkbox' 
          onClick={this.handleFilter}>
          {(checked) ? 'X' : null}
        </button>
      </div>
    );
  };
};

TaxiFilter.propTypes = {
  availabilityFilter: propTypes.func.isRequired,
};
