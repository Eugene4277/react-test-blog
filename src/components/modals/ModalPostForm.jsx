import React from 'react';
import AddPostForm from '../AddPostForm';

function ModalPostForm(props) {
  return (
    <div className="modal" tabIndex="-1" id="modalPostForm">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">New Post</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <AddPostForm rowsCount={4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPostForm;