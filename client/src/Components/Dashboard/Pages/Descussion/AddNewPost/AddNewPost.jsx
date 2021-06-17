import React from 'react';

import './AddNewPost.css';

const AddNewPost = () => {

    return (
        <>
            <div className="createpost">
                <textarea name="" placeholder="What is in your mind John? Let discuss" className="form-control"></textarea>
                <div className="d-flex justify-content-between align-items-center mt-3">
                    <div className="d-flex justify-content-center align-items-center options option1">
                        <div className="pr-2"><i class="las la-photo-video"></i></div>
                        <div>Photo/Video</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center options option2">
                        <div className="pr-2"><i class="lar la-copy"></i></div>
                        <div>Files</div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center options">
                        <div className="w-100">
                            <button className="btn">Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    
};

export default AddNewPost;