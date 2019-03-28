import axios from "axios";
import auth from "../Auth";

export const FETCHED = "FETCHED";
export const FETCHING = "FETCHING";
export const FETCHING_ERROR = "FETCHING_ERROR";

export const getUsers = () => {
  const { getAccessToken } = auth;
  const headers = { Authorization: `Bearer ${getAccessToken()}` };
  const promise = axios.get(
    "https://workout-tracker-pt2.herokuapp.com/api/users",
    { headers }
  );
  return dispatch => {
    dispatch({ type: FETCHING });
    promise
      .then(response => {
        console.log(response);
        dispatch({ type: FETCHED, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCHING_ERROR, payload: err });
      });
  };
};
