import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Post from "../components/Post";
import Comment from "../components/Comment";
import { fetchComments } from "../redux/actions";
import { withRouter } from "react-router-dom";

function PostDetails(props) {
  const post = props.location.state[0];
  const user = props.location.state[1];
  const { comments } = props;

  useEffect(() => {
    props.fetchComments(post.id);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Header goBackArrow={true} headerName={"Post"} />
      <div className="postDetails">
        <Post post={post} user={user} />
      </div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default withRouter(connect(mapStateToProps, { fetchComments })(PostDetails));
