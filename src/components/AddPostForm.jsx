import { TextareaAutosize } from '@material-ui/core';
import React from 'react';

function AddPostForm(props) {
  return (
    <div className="post-form">
      <div className="media">
        <img
          src="https://cdn2.iconfinder.com/data/icons/rcons-user/32/male-shadow-circle-512.png"
          className="align-self-start mr-3 user-icon"
          alt="..."
        />
        <div className="media-body">
          {/* <h5 className="mt-0">
          </h5> */}
          {/* <p>
          </p> */}
          <form action=""><TextareaAutosize placeholder="What's happening?" className="mt-3" name="" id="addPostText" rows="2" />
          <button type="button" className="btn btn-primary add-post-btn">
          Add post
        </button>
       </form>
           </div>
      </div>
    </div>
  );
}

export default AddPostForm;