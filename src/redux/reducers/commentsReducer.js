import { types } from "../types";

const initialState = [];

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_COMMENTS:
      return action.payload;
    default:
      return state;
  }
};
