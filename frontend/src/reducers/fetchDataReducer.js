import { actionTypes } from '../actions';

export default (state='', action) => {
  switch(action.type){
    case actionTypes.GET_DATA:
      return action;
    default:
      return state;
  }
};