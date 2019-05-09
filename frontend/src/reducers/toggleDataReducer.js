import { actionTypes } from '../actions';

export default (state='taxis', action) => {
  switch(action.type){
    case actionTypes.SET_ACTIVE_DATA:
      return action;
    default:
      return state;
  }
};