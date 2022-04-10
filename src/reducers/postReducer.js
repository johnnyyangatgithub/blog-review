//postReducer is supposed to maintain a list of posts
//that we have fetch from JSON api.

const postReducers = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;

    default:
      return state;
  }
};

export default postReducers;
