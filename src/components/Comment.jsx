import React from "react";
import SharedButtons from "./SharedButtons";

function Comment(props) {
  const { comment } = props;
  return (
    <div className="post">
      <div className="media">
        <img
          src={`https://randomuser.me/api/portraits/men/${comment.id}.jpg`}
          className="align-self-start mr-3 user-icon"
          alt="..."
        />
        <div className="media-body">
          <h5 className="mt-0">{comment.email}</h5>
          <p className="text">{comment.body}</p>
        </div>
      </div>
      <SharedButtons />
    </div>
  );
}

export default Comment;
