import React, { useState } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions';

function AddPostForm(props) {
  const { rowsCount, currentUser, addPost } = props;
  const [textareaInput, setTextareaInput] = useState("");
  const isDisabled = textareaInput ? false : true;

  const addPostHandler = (e) => {
    e.preventDefault();
    const post = {
      userId: currentUser.id,
      body: textareaInput,
      id: Date.now()
    }
    setTextareaInput("");

    addPost(post);
  }

  return (
    <div className="post-form">
      <div className="media">
        <img
          src="https://randomuser.me/api/portraits/men/99.jpg"
          className="align-self-start mr-3 user-icon"
          alt="..."
          style={{ cursor: "pointer" }}
          onClick={() => props.history.push("/profile")}
        />
        <div className="media-body">
          {/* <h5 className="mt-0">
          </h5> */}
          {/* <p>
          </p> */}
          <form onSubmit={addPostHandler}>
            <TextareaAutosize value={textareaInput} onChange={(e) => setTextareaInput(e.target.value)} placeholder="What's happening?" className="mt-3 addPostText" name="textarea" rows={rowsCount} />
            <button type="submit" disabled={isDisabled} className="btn btn-primary add-post-btn">
              Add post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect(mapStateToProps, { addPost })(AddPostForm));