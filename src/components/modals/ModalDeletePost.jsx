import React from 'react';
import { connect } from 'react-redux';
import { deletePost } from '../../redux/actions';

function ModalDeletePost(props) {
    const { post, deletePost } = props;
    const handleDeletePost = () => {
        deletePost(post);
    }
    return (
        <div className="modal" tabIndex="-1" id={props.id}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Delete Post</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <h4>Delete post?</h4>
                        <p>This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you.</p>
                        <div className="modal-buttons">
                            <button type="button" data-dismiss="modal" aria-label="Close" className="btn btn-light btn-sm">Cancel</button>
                            <button data-dismiss="modal" aria-label="Close" onClick={handleDeletePost} type="button" className="btn btn-danger btn-sm">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default connect(null, { deletePost })(ModalDeletePost);