import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Post from "./Post";
import Comment from "./Comment";

import { fetchComments } from "../redux/actions";

function PostDetails(props) {
  const post = props.location.state[0];
  const user = props.location.state[1];
  const { comments } = props;

  useEffect(() => {
    props.fetchComments(post.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header goBackArrow={true} headerName={"Post"} />
      <div className="postDetails">
        <Post post={post} user={user} />
      </div>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, { fetchComments })(PostDetails);
