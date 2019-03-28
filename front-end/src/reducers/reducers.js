import auth from "../Auth";
import { FETCHED, FETCHING, FETCHING_ERROR } from "../actions/actions";

const initialState = {
  auth,
  users: [],
  fetching: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        users: [...action.payload],
        fetching: false
      });
    case FETCHING_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching user info"
      });
    default:
      return state;
  }
};
