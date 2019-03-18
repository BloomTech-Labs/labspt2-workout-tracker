import auth from '../Auth';
import { GETUSERS } from '../actions/actions';

const initialState = {
  auth,
  users: {
    name: 'Corey',
    email: 'kohler.nai@gmail.com'
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    // case GETUSERS:
    //   return { ...state }, { users: }
    default:
      return state;
  }
};
