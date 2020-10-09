import { types } from "../types";

const initialState = {
  loading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SHOW_LOADER:
      return { ...state, loading: true };
    case types.HIDE_LOADER:
      return { ...state, loading: false };
    default:
      return state;
  }
};
