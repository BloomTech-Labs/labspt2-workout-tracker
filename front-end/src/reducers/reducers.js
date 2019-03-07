import Auth from '../Auth';

const auth = new Auth();

const initialState = {
  auth
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
