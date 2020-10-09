import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Posts from "../components/Posts";

import { fetchUserPosts, fetchUser } from "../redux/actions";

function UserPage(props) {
  const { id: userId } = props.match.params;
  const { posts, user, isLoading } = props;
  useEffect(() => {
    props.fetchUser(userId);
    props.fetchUserPosts(userId);

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header
        goBackArrow={true}
        headerName={user.name}
        additionalInfo={`${posts.length} Posts`}
      />
      <Posts posts={posts} users={user} isLoading={isLoading} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    user: state.users,
    isLoading: state.app.loading,
  };
};

export default connect(mapStateToProps, { fetchUserPosts, fetchUser })(
  UserPage
);
