import { actionTypes } from '../actions';

const initialState = {
  fuelFilter: false,
  stateFilter: false,
};

export default (state=initialState, action) => {
  switch(action.type){
    case actionTypes.FILTER_CARS_BY_FUEL:
      return {
        ...state,
        fuelFilter: action.payload,
      };
    case actionTypes.FILTER_CARS_BY_STATE:
      return {
        ...state,
        stateFilter: action.payload,
      };
    default:
      return state;
  };
};
