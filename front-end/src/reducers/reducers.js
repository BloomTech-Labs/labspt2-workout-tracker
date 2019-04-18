import auth from "../Auth";
import {
  FETCHED,
  FETCHING,
  FETCHING_USERINFO,
  FETCHED_USERINFO,
  FETCHING_NOTES,
  FETCHED_NOTES,
  FETCHING_ERROR
} from "../actions/actions";

const initialState = {
  auth,
  data: [],
  userdata: [],
  notes: [],
  fetching: false,
  error: "",
  events: [ {
    id: 1,
    title  : 'Curls',
    start: '2019-11-21T10:15:00',
    end: '2019-11-12T10:30:00',
    allDay: false,
    category: 'Arms'
  },
  {
    id: 2,
    title  : 'Run',
    start: '2019-03-12T21:30:00',
    end: '2019-03-12T21:30:00',
    allDay: false,
    category: 'Legs'

  },
  {
    id: 4,
    title  : 'Situps',
    start: '2019-03-12T04:30:00',
    end: '2019-03-12T04:30:00',
    allDay: false,
    category: 'Core'

  },
  {
    id: 3,
    title  : 'Crunches',
    start: '2019-03-12T09:30:00',
    end: '2019-03-12T09:30:00',
    allDay: false,
    category: 'Core'
  },
  {
    id: 5,
    title  : 'Moon-Lifts',
    start: '2019-12-12T23:30:00',
    end: '2019-12-12T23:30:00',
    allDay: false,
    category: 'Entire Body'
  },
  {
    id: 6,
    title  : 'Bluebells',
    start: '2019-01-19T09:30:00',
    end: '2019-01-19T09:30:00',
    allDay: false,
    category: 'Hands'
  },
  {
    id: 7,
    title  : 'Toenail Biters',
    start: '2019-10-26T20:15:00',
    end: '2019-10-26T20:15:00',
    allDay: false,
    category: 'Neck'
  },
  {
    id: 8,
    title  : 'Sweats',
    start: '2019-01-19T09:30:00',
    end: '2019-01-19T09:30:00',
    allDay: false,
    category: 'Forehead'
  }]
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
    case FETCHING_NOTES:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_NOTES:
      return Object.assign({}, state, {
        notes: [action.payload],
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
