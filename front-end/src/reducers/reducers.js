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
  FETCHING_ERROR,
  DATE_CLICKED,
  FETCHED_PREMIUM
} from '../actions/actions';

const initialState = {
  auth,
  data: [],
  userinfo: [],
  userdata: [],
  notes: [],
  dateClicked: null,
  events: [
    {
      id: 1,
      title: 'Arms',
      start: '2019-11-21T10:15:00',
      end: '2019-11-21T10:30:00',
      allDay: false,
      exercises: ['A', 'B']
    },
    {
      id: 2,
      title: 'Legs',
      start: '2019-11-21T11:15:00',
      end: '2019-11-21T11:30:00',
      allDay: false,
      exercises: ['C', 'D', 'E', 'F', 'G']
    },
    {
      id: 4,
      title: 'Core',
      start: '2019-03-12T04:30:00',
      end: '2019-03-12T04:30:00',
      allDay: false,
      exercises: ['H']
    },
    {
      id: 3,
      title: 'Cardio',
      start: '2019-03-13T09:30:00',
      end: '2019-03-13T09:30:00',
      allDay: false,
      exercises: ['Bicept Curls', 'Tricept Pulldowns']
    },
    {
      id: 5,
      title: 'Shoulders',
      start: '2019-01-01T09:30:00',
      end: '2019-01-01T010:30:00',
      allDay: false,
      exercises: ['Lifts (2 sets) 10 reps', 'Extensions']
    },
    {
      id: 6,
      title: 'Chest',
      start: '2019-01-01T10:45:00',
      end: '2019-01-01T11:45:00',
      allDay: false,
      exercises: ['Bicept Curls', 'Tricept Pulldowns']
    },
    {
      id: 7,
      title: 'Back',
      start: '2019-01-03T09:30:00',
      end: '2019-01-03T09:30:00',
      allDay: false,
      exercises: ['Bicept Curls', 'Tricept Pulldowns']
    },
    {
      id: 8,
      title: 'Abs',
      start: '2019-01-04T09:30:00',
      end: '2019-01-04T09:30:00',
      allDay: false,
      exercises: ['Sweats', 'Headaches', 'Face Plants']
    }
  ],
  categories: [
    { id: 1, categoryName: 'Glutes', userId: 1 },
    { id: 2, categoryName: 'Arms', userId: 1 },
    { id: 3, categoryName: 'Legs', userId: 1 }
  ],
  exercises: [
    {
      exerciseName: 'Lunges',
      reps: '6',
      weight: '150 lbs',
      sets: '4',
      categoryId: 1,
      userId: 1
    },
    {
      exerciseName: 'Bicep Curls',
      reps: '5',
      weight: '100 lbs',
      sets: '5',
      categoryId: 2,
      userId: 1
    },
    {
      exerciseName: 'Preacher Curls',
      reps: '4',
      weight: '100 lbs',
      sets: '4',
      categoryId: 2,
      userId: 1
    },
    {
      exerciseName: 'Blast Off',
      reps: '4',
      weight: '100 lbs',
      sets: '4',
      categoryId: 3,
      userId: 1
    }
  ],
  userid: null,
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
      return Object.assign(
        {},
        state,
        {
          userdata: [action.payload],
          fetching: false
        },
        console.log('IN THE FETCHED USERDATA', action)
      );
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
        userinfo: [action.payload],
        fetching: false
      });
    case FETCHING_NOTES:
      return Object.assign({}, state, { fetching: true });
    case FETCHED_NOTES:
      return Object.assign({}, state, {
        notes: action.payload,
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
    case FETCHED_PREMIUM:
      return Object.assign(
        {},
        state,
        {
          premium: action.payload
        },
        console.log('Welcome to premium!')
      );

    // case FETCHING_EVENTS:
    // return Object.assign({}, state, { fetching: true });
    // case FETCHED_EVENTS:
    // return Object.assign({}, state, {
    //   events: [action.payload],
    //   fetching: false
    // });
    // case FETCHING_EVENTS_ERROR:
    // return Object.assign({}, state, {
    //   fetching: false,
    //   error: "Error fetching event info"
    // });

    default:
      return state;
  }
};
