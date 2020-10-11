import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updatePost } from '../../redux/actions';
import { TextareaAutosize } from '@material-ui/core';

function ModalUpdatePost(props) {
  const { post, updatePost } = props;
  const [textareaInput, setTextareaInput] = useState(post.body);
  const isDisabled = textareaInput ? false : true;

  const handleUpdatePost = () => {
    const updatedPost = {
      userId: post.userId,
      body: textareaInput,
      id: post.id
    }

    updatePost(updatedPost);
  }

  return (
    <div className="modal" tabIndex="-1" id={props.id}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Update Post</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="media">
              <img
                src="https://randomuser.me/api/portraits/men/99.jpg"
                className="align-self-start mr-3 user-icon"
                alt="..."
                style={{ cursor: "pointer" }}
              // onClick={() => props.history.push("/profile")}
              />
              <div className="media-body">
                <form>
                  <TextareaAutosize value={textareaInput} rows="3" onChange={(e) => setTextareaInput(e.target.value)} placeholder="Update your post" className="mt-3 addPostText" name="textarea" />
                  <div className="modal-buttons">
                    <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn-light btn-sm">Cancel</button>
                    <button onClick={handleUpdatePost} disabled={isDisabled} data-dismiss="modal" aria-label="Close" type="button" className="btn btn-success btn-sm">Update</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default connect(null, { updatePost })(ModalUpdatePost);