import { combineReducers } from 'redux';

import initialData from './fetchDataReducer';
import toggleData from './toggleDataReducer';
import filterTaxis from './filterTaxisReducer';
import filterCar from './filterCarReducer';

export default combineReducers({
  initialData,
  toggleData,
  filterTaxis,
  filterCar,
});
