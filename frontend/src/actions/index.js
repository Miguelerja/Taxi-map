import apiCall from '../API/api';

export const actionTypes = {
  GET_DATA: 'GET_DATA',
  SET_ACTIVE_DATA: 'SET_ACTIVE_DATA',
  FILTER_TAXIS: 'FILTER_TAXIS',
  FILTER_CARS_BY_FUEL: 'FILTER_CARS_BY_FUEL',
  FILTER_CARS_BY_STATE: 'FILTER_CARS_BY_STATE',
};

export const getData = () => {
  return async function (dispatch) {
    try {
      const { taxis, cars } = await apiCall(); 
      return dispatch({
        type: actionTypes.GET_DATA,
        taxis,
        cars,
      });
    } catch(error) {console.warn(error)};
  };
};

export const setActiveData = (dataSet) => {
  return function (dispatch) {
    return dispatch({
      type: actionTypes.SET_ACTIVE_DATA,
      payload: dataSet,
    });
  };
};

export const filterTaxis = (filtered) => {
  return function(dispatch) {
    return dispatch({
      type: actionTypes.FILTER_TAXIS,
      payload: filtered,
    });
  };
};

export const filterCarsByFuel = (fuel) => {
  return function(dispatch) {
    return dispatch({
      type: actionTypes.FILTER_CARS_BY_FUEL,
      payload: fuel,
    });
  };
};

export const filterCarsByState = (state) => {
  return function(dispatch) {
    return dispatch({
      type: actionTypes.FILTER_CARS_BY_STATE,
      payload: state,
    });
  };
};