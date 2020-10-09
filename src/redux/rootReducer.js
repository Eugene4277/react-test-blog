import { combineReducers } from "redux";

import { postsReducer } from "./reducers/postsReducer";
import { commentsReducer } from "./reducers/commentsReducer";
import { usersReducer } from "./reducers/usersReducer";
import { appReducer } from "./reducers/appReducer";

export default combineReducers({
  posts: postsReducer,
  users: usersReducer,
  comments: commentsReducer,
  app: appReducer,
});
