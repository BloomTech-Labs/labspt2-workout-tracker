import axios from 'axios';

export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const FETCHING_ERROR = 'FETCHING_ERROR';

export const getUsers = () => {
  const promise = axios.get(
    'https://workout-tracker-pt2.netlify.com/api/users'
  );
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};
