import axios from "axios";
import auth from "../Auth";

export const FETCHED = "FETCHED";
export const FETCHING = "FETCHING";
export const FETCHING_ERROR = "FETCHING_ERROR";

const DEPLOYED = "https://workout-tracker-pt2.herokuapp.com";
const LOCAL = "http://localhost:3333";

export const getData = () => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.get(`${DEPLOYED}/api/users`, { headers });
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

export const postCategory = categoryName => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.post(`${DEPLOYED}/api/categories`, categoryName, {
    headers
  });
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

export const postExercise = exerciseBody => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.post(`${DEPLOYED}/api/exercises`, exerciseBody, {
    headers
  });
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

export const updateUser = userUpdates => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.patch(`${LOCAL}/userupdate`, userUpdates, {
    headers
  });
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
