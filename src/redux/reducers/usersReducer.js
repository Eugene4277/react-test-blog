import { types } from "../types";

const initialState = []

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_USERS:
      return action.payload;
    default:
      return state;
  }
};
