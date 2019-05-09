import { actionTypes } from '../actions';

export default (state={}, action) => {
  switch(action.type){
    case actionTypes.GET_DATA:
      return {
        ...state,
        taxis: action.taxis,
        cars: action.cars,
      };
    default:
      return state;
  }
};