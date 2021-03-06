import { types } from "./types";
import axios from "axios";

import { setToken } from '../services/authService';


export const fetchPosts = () => async (dispatch) => {
  dispatch(showLoader());
  await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=20")
    .then((res) => {
      dispatch({
        type: types.FETCH_POSTS,
        payload: res.data,
      });
      dispatch(hideLoader());
    })
    .catch((err) => {
      console.log(err);
      dispatch(hideLoader());
    });
};

export const addPost = (post) => (dispatch) => {
  dispatch({
    type: types.ADD_POST,
    payload: post,
  });
}

export const deletePost = (post) => (dispatch) => {
  dispatch({
    type: types.DELETE_POST,
    payload: post,
  });
}

export const updatePost = (post) => (dispatch) => {
  dispatch({
    type: types.UPDATE_POST,
    payload: post,
  });
}


export const fetchUserPosts = (id) => async (dispatch) => {
  dispatch(showLoader());
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then((res) => {
      dispatch({
        type: types.FETCH_POSTS,
        payload: res.data,
      });
      dispatch(hideLoader());
    })
    .catch((err) => {
      console.log(err);
      dispatch(hideLoader());
    });
};

export const fetchUsers = () => async (dispatch) => {
  await axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      dispatch({
        type: types.FETCH_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchUser = (id) => async (dispatch) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => {
      dispatch({
        type: types.FETCH_USERS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const fetchComments = (id) => async (dispatch) => {
  dispatch(showLoader());
  await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then((res) => {
      dispatch({
        type: types.FETCH_COMMENTS,
        payload: res.data,
      });
      dispatch(hideLoader());
    })
    .catch((err) => {
      console.log(err);
      dispatch(hideLoader());
    });
};

export const authUser = (user = {}) => async (dispatch) => {
  dispatch(showLoader());
  await axios.post('https://jsonplaceholder.typicode.com/users', { ...user })
    .then((res) => {
      const { data } = res;
      dispatch({
        type: types.AUTH_USER,
        payload: data,
      });
      setToken(data);
      dispatch(hideLoader());
    })
    .catch((err) => {
      console.log(err);
      dispatch(hideLoader());
    });
}

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT_USER,
  });
}

export const showLoader = () => {
  return {
    type: types.SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: types.HIDE_LOADER,
  };
};
