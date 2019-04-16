import auth from "../Auth";
import {
  FETCHED,
  FETCHING,
  FETCHING_USERINFO,
  FETCHED_USERINFO,
  FETCHING_ERROR
} from "../actions/actions";

const initialState = {
  auth,
  data: [],
  userdata: [],
  fetching: false,
  error: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case FETCHED:
      return Object.assign({}, state, {
        data: [...action.payload],
        fetching: false
      });
    case FETCHING_USERINFO:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_USERINFO:
      return Object.assign({}, state, {
        userdata: [action.payload],
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
