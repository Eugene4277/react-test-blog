import { types } from "../types";

const initialState = [];

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};
