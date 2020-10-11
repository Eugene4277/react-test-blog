import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import ModalDeletePost from "./modals/ModalDeletePost";
import ModalUpdatePost from "./modals/ModalUpdatePost";
import SharedButtons from "./SharedButtons";

function Post(props) {
  const { post, user, currentUser } = props;
  let img;
  let link;
  let usr;
  let postOprions = false;

  if (user && (user.id !== currentUser.id)) {
    usr = user;
    img = user.id;
    link = `/user/${user.id}`;
  } else if (currentUser) {
    usr = currentUser;
    img = '99';
    link = `/profile`;
    postOprions = true;
  }

  if (post && usr)
    return (
      <div className="post">
        <div className="media">
          <img
            src={`https://randomuser.me/api/portraits/men/${img}.jpg`}
            className="align-self-start mr-3 user-icon"
            alt="..."
            onClick={() => props.history.push(link)}
          />
          <div className="media-body">
            <h5 className="mt-0">
              <Link to={link}>{usr.name}</Link>
            </h5>
            <p
              onClick={() => props.history.push(`/post/${post.id}`, [post, usr])}
              className="text"
            >
              {post.body}
            </p>
          </div>
          {postOprions &&
            <div className="btn-group dropleft">
              <i data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="fas fa-angle-down"></i>
              <div className="dropdown-menu">
                <button type="button" data-toggle="modal" data-target={`#modalDeletePost${post.id}`} className="dropdown-item"><i className="fas fa-trash-alt delete-post"></i>Delete</button>
                <div className="dropdown-divider"></div>
                <button type="button" data-toggle="modal" data-target={`#modalUpdatePost${post.id}`} className="dropdown-item"><i className="fas fa-edit"></i>Edit</button>
              </div>
            </div>}
        </div>
        <SharedButtons />
        <ModalDeletePost post={post} id={`modalDeletePost${post.id}`} />
        <ModalUpdatePost post={post} id={`modalUpdatePost${post.id}`} />
      </div>
    );
  else return null;
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, null)(Post));
