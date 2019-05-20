import auth from '../Auth';
import {
  FETCHED,
  FETCHING,
  FETCHING_USERDATA,
  FETCHED_USERDATA,
  FETCHING_USERINFO,
  FETCHED_USERINFO,
  FETCHING_USERID,
  FETCHED_USERID,
  FETCHING_NOTES,
  FETCHED_NOTES,
  FETCHED_CATEGORIES,
  FETCHING_CATEGORIES,
  FETCHED_EXERCISES,
  FETCHING_EXERCISES,
  FETCHED_EVENTS,
  FETCHING_EVENTS,
  FETCHING_ERROR,
  DATE_CLICKED,
  EVENTSFORM_CLOSED,
  EVENT_SCHEDULED,
  EVENT_OBJECT,
  EVENT_DELETE,
  EVENT_UPDATE,
  FETCHED_PREMIUM
} from '../actions/actions';

const initialState = {
  auth,
  data: [],
  userinfo: [],
  userdata: [],
  notes: [],
  dateClicked: null,
  events: [],
  categories: [],
  exercises: [],
  fetching: false,
  dateClicked: false,
  error: '',
  premium: false
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
    case FETCHING_USERDATA:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_USERDATA:
      return Object.assign({}, state, {
        userdata: action.payload,
        fetching: false
      });
    case FETCHING_USERID:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_USERID:
      return Object.assign({}, state, {
        userid: action.payload,
        fetching: false
      });
    case FETCHING_USERINFO:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_USERINFO:
      return Object.assign({}, state, {
        userinfo: action.payload,
        fetching: false
      });
    case FETCHING_NOTES:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_NOTES:
      return Object.assign({}, state, {
        notes: action.payload,
        fetching: false
      });
    case FETCHING_CATEGORIES:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_CATEGORIES:
      return Object.assign({}, state, {
        categories: action.payload,
        fetching: false
      });
    case FETCHING_EXERCISES:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_EXERCISES:
      return Object.assign({}, state, {
        exercises: action.payload,
        fetching: false
      });
    case FETCHING_EVENTS:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_EVENTS:
      return Object.assign({}, state, {
        events: action.payload,
        fetching: false
      });
    case FETCHING_ERROR:
      return Object.assign({}, state, {
        fetching: false,
        error: 'Error fetching user info'
      });
    case DATE_CLICKED:
      return Object.assign({}, state, {
        dateClicked: action.payload
      });
    case EVENTSFORM_CLOSED:
      return Object.assign({}, state, {
        dateClicked: null
      });
    case EVENT_SCHEDULED:
      return Object.assign({}, state, {
        events: action.payload
      });
    case EVENT_OBJECT:
      return Object.assign({}, state, {
        byDate: action.payload
      });
    case EVENT_DELETE:
      return Object.assign({}, state, {
        events: action.payload
      });
    case EVENT_UPDATE:
      return Object.assign({}, state, {
        events: action.payload
      });

    case FETCHED_PREMIUM:
      return Object.assign({}, state, {
        premium: true
      });
    default:
      return state;
  }
};
