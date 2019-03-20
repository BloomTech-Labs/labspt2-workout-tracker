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
        console.log('IN THE ACTION' + response.data);
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCHING_ERROR });
      });
  };
};
