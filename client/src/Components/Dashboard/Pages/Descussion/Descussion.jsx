import React, { useEffect } from 'react';

import './Descussion.css';
import AddNewPost from './AddNewPost/AddNewPost';
import $ from 'jquery';

const Descussion = () => {


    useEffect(
        () => {

            $('.comments_input').toggle(0);
            $('.comments').on('click', () => {
                $('.comments_input').toggle(400);
            });

        }, []
    )

    return (
        <>
            <div className="Descussion container-fluid mt-3">
                <AddNewPost />
                <div className="previous_descussions">
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="emp_img" style={ { 'backgroundImage' : "url('https://www.gizbot.com/img/2016/05/shutterstock-380389330-28-1464414634.jpg')" } }></div>
                        <div className="pl-3">
                            <h5 className="mb-0">Usman Badar</h5>
                            <p className="mb-0 text-secondary">9 June 2021 at 09:08 am</p>
                        </div>
                    </div>
                    <div className="description">
                        In publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is a
                    </div>
                    <img src="https://external.fkhi17-1.fna.fbcdn.net/safe_image.php?d=AQGy4UbCXSmrw6e8&w=1000&h=522&url=https%3A%2F%2Fec-d.us-east-1.linodeobjects.com%2Fblog%2Fimg%2F1623675824.jpg&cfs=1&ext=jpg&tp=1&ccb=3-5&_nc_hash=AQGTGf2GYboBAihf" width="100%" alt="Post Img" />
                    <div className="UX">
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className=""><i class="lar la-thumbs-up pr-2"></i>Like</div>
                        </div>
                        |
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className="comments"><i class="las la-comments pr-2"></i>Comments</div>
                        </div>
                    </div>
                    <div className="comments_input">
                        <input type="text" className="form-control" placeholder="Write A Comments" />
                        <small className="d-block mx-auto pl-3 text-secondary">Press enter to post</small>
                    </div>
                </div>
                <div className="previous_descussions">
                    <div className="d-flex justify-content-start align-items-center">
                        <div className="emp_img" style={ { 'backgroundImage' : "url('https://woocommerce.com/wp-content/uploads/2019/08/blog-User@2x.jpg')" } }></div>
                        <div className="pl-3">
                            <h5 className="mb-0">John Doe</h5>
                            <p className="mb-0 text-secondary">9 June 2021 at 10:00 am</p>
                        </div>
                    </div>
                    <div className="description">
                        In publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing.
                    </div>
                    <img src="data:image/jpeg;base64,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" width="100%" alt="Post Img" />
                    <div className="UX">
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className=""><i class="lar la-thumbs-up pr-2"></i>Like</div>
                        </div>
                        |
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className="comments"><i class="las la-comments pr-2"></i>Comments</div>
                        </div>
                    </div>
                    <div className="comments_input">
                        <input type="text" className="form-control" placeholder="Write A Comments" />
                        <small className="d-block mx-auto pl-3 text-secondary">Press enter to post</small>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Descussion;