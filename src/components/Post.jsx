import React from "react";
import { Link, withRouter } from "react-router-dom";
import SharedButtons from "./SharedButtons";

function Post(props) {
  const { post, user } = props;
  return (
    <div className="post">
      <div className="media">
        <img
          src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-circle-512.png"
          className="align-self-start mr-3 user-icon"
          alt="..."
        />
        <div className="media-body">
          <h5 className="mt-0">
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </h5>
          <p
            onClick={() => props.history.push(`/post/${post.id}`, [post, user])}
            className="text"
          >
            {post.body}
          </p>
        </div>
      </div>
      <SharedButtons />
    </div>
  );
}

export default withRouter(Post);
