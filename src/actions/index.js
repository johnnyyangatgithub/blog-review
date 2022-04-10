import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';

export const fetchPosts = () => {
  return async (dispatch) => {
    const res = await jsonPlaceholder.get('/posts');

    dispatch({ type: 'FETCH_POSTS', payload: res.data });
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    _fetchUser(id, dispatch);
  };
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const res = await jsonPlaceholder.get(`/users/${id}`);
  //we'll get an object back instead of an array
  dispatch({ type: 'FETCH_USER', payload: res.data });
});
