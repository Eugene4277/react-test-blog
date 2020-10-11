import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { fetchUserPosts, fetchUser } from "../redux/actions";

function UserPage(props) {
  const { id: userId } = props.match.params;
  const { fetchedPosts, user, isLoading } = props;
  useEffect(() => {
    props.fetchUser(userId);
    props.fetchUserPosts(userId);

    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header
        goBackArrow={true}
        headerName={user.name}
        additionalInfo={`${fetchedPosts.length} Posts`}
      />
      <Posts fetchedPosts={fetchedPosts} users={user} isLoading={isLoading} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    fetchedPosts: state.posts.fetchedPosts,
    user: state.users,
    isLoading: state.app.loading,
  };
};

export default withRouter(connect(mapStateToProps, { fetchUserPosts, fetchUser })(
  UserPage
));
