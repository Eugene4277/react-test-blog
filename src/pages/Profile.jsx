import React from "react";
import Header from "../components/Header";
import { connect } from "react-redux";
import Posts from "../components/Posts";
import { withRouter } from "react-router-dom";

function Profile(props) {
  const { posts, currentUser } = props;
  return (
    <>
      <Header
        goBackArrow={true}
        headerName={currentUser.name}
        additionalInfo={`${posts.length} Posts`}
      />
      <Posts currentUserPosts={posts} currentUser={currentUser} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.currentUserPosts,
    currentUser: state.currentUser
  };
};

export default withRouter(connect(mapStateToProps, null)(Profile));
