import { actionTypes } from '../actions';

export default (state=false, action) => {
  switch(action.type){
    case actionTypes.FILTER_TAXIS:
      return action.payload;
    default:
      return state;
  }
};