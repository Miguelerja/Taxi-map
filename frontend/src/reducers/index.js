import { combineReducers } from 'redux';

import initialData from './fetchDataReducer';
import toggleData from './toggleDataReducer';

export default combineReducers({
  initialData,
  toggleData,
});
