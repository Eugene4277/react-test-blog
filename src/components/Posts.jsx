import React from "react";
import Loader from "../components/Loader";
import Post from "../components/Post";

function Posts(props) {
  const { fetchedPosts, users, currentUser, isLoading, currentUserPosts } = props;
  let posts;
  if (currentUserPosts && fetchedPosts)
    posts = currentUserPosts.concat(fetchedPosts);
  else if (fetchedPosts)
    posts = fetchedPosts;
  else
    posts = currentUserPosts;
  if (posts && (users || currentUser))
    return (
      <div className="postsContainer">
        {isLoading ? (
          <Loader />
        ) : (
            posts.map((post) => {
              let user;
              if (users === undefined || users.length === undefined) user = currentUser ? currentUser : users;
              else user = users.filter((user) => user.id === post.userId)[0];
              return <Post key={post.id} post={post} user={user} />;
            })
          )}
      </div>
    );
}

export default Posts;
