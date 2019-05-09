import { combineReducers } from 'redux';

import initialData from './fetchDataReducer';
import toggleData from './toggleDataReducer';
import filterTaxis from './filterTaxisReducer';

export default combineReducers({
  initialData,
  toggleData,
  filterTaxis,
});
