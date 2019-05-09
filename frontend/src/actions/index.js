import apiCall from '../API/api';

export const actionTypes = {
  GET_DATA: 'GET_DATA',
  FILTER_TAXIS: 'FILTER_TAXIS',
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