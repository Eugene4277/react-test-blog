import React, { useEffect } from "react";
import { connect } from "react-redux";
import AddPostForm from "../components/AddPostForm";
import Header from "../components/Header";
import Posts from "../components/Posts";

import { fetchPosts, fetchUsers } from "../redux/actions";

function Home(props) {
  const { posts, users, isLoading } = props;
  useEffect(() => {
    props.fetchUsers();
    props.fetchPosts();

    // eslint-disable-next-line
  }, []);
  return (
    <div>
      <Header headerName={"Home"} />
      <AddPostForm />
      <Posts posts={posts} users={users} isLoading={isLoading} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
    isLoading: state.app.loading,
  };
};

export default connect(mapStateToProps, { fetchPosts, fetchUsers })(Home);
