import { types } from "../types";

const initialState = {
  fetchedPosts: [],
  currentUserPosts: []
};

// const deletePost = (currentUserPosts, post) => {
//   console.log(currentUserPosts.findIndex(i => i.id === post.id));
//   const idx = currentUserPosts.findIndex(i => i.id === post.id);
//   return [...currentUserPosts.slice(0, idx), ...currentUserPosts.slice(idx + 1)];
// }

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_POSTS:
      return { ...state, fetchedPosts: action.payload };
    case types.ADD_POST:
      return { ...state, currentUserPosts: [action.payload, ...state.currentUserPosts] };
    case types.DELETE_POST:
      const post = action.payload;
      return { ...state, currentUserPosts: [...state.currentUserPosts.filter(p => post.id !== p.id)] };
    case types.UPDATE_POST:
      const postUpd = action.payload;
      const idx = state.currentUserPosts.findIndex(i => i.id === postUpd.id);
      console.log(idx);
      console.log(state.currentUserPosts[idx]);
      console.log(postUpd);
      return { ...state, currentUserPosts: [state.currentUserPosts[idx] = postUpd] };
    default:
      return state;
  }
};
