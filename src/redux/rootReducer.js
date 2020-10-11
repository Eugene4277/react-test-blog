import { combineReducers } from "redux";

import { postsReducer } from "./reducers/postsReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import { usersReducer } from "./reducers/usersReducer";
import { appReducer } from "./reducers/appReducer";
import { currentUserReducer } from './reducers/currentUserReducer';

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  currentUser: currentUserReducer,
  comments: commentsReducer,
  app: appReducer,
});
