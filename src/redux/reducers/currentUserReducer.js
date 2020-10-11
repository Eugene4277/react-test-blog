import { getCurrentUser } from "../../services/authService";
import { types } from "../types";

const initialState = getCurrentUser() === null ? {} : getCurrentUser();

export const currentUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.AUTH_USER:
            return action.payload;
        case types.LOGOUT_USER:
            return {};
        default:
            return state;
    }
};