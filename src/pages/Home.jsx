import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import AddPostForm from "../components/AddPostForm";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { fetchPosts, fetchUsers } from "../redux/actions";


function Home(props) {
  const { fetchedPosts, users, isLoading, currentUserPosts } = props;
  useEffect(() => {
    props.fetchUsers();
    props.fetchPosts();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Header headerName={"Home"} />
      <AddPostForm rowsCount={2} />
      <Posts currentUserPosts={currentUserPosts} fetchedPosts={fetchedPosts} users={users} isLoading={isLoading} />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    fetchedPosts: state.posts.fetchedPosts,
    currentUserPosts: state.posts.currentUserPosts,
    users: state.users,
    isLoading: state.app.loading,
  };
};

export default withRouter(connect(mapStateToProps, { fetchPosts, fetchUsers })(Home));
