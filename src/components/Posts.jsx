import React from "react";
import Loader from "../components/Loader";
import Post from "../components/Post";

function Posts(props) {
  const { posts, users, isLoading } = props;

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        posts.map((post) => {
          let user;
          if (users.length === undefined) user = users;
          else user = users.filter((user) => user.id === post.userId)[0];
          return <Post key={post.id} post={post} user={user} />;
        })
      )}
    </div>
  );
}

export default Posts;
