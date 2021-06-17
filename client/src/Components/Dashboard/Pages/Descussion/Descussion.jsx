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
                        <div className="emp_img" style={ { 'backgroundImage' : "url('https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg')" } }></div>
                        <div className="pl-3">
                            <h5 className="mb-0">Usman Badar</h5>
                            <p className="mb-0 text-secondary">9 June 2021 at 09:08 am</p>
                        </div>
                    </div>
                    <div className="description">
                        In publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is aIn publishing and graphic design, Lorem ipsum is a
                    </div>
                    <img src="https://external.fkhi17-1.fna.fbcdn.net/safe_image.php?d=AQGy4UbCXSmrw6e8&w=1000&h=522&url=https%3A%2F%2Fec-d.us-east-1.linodeobjects.com%2Fblog%2Fimg%2F1623675824.jpg&cfs=1&ext=jpg&tp=1&ccb=3-5&_nc_hash=AQGTGf2GYboBAihf" width="100%" alt="Post Img" />
                    <div className="d-flex justify-content-between align-items-center UX">
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className="w-50"><i class="lar la-thumbs-up pr-2"></i>Like</div>
                        </div>
                        |
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className="w-50 comments"><i class="las la-comments pr-2"></i>Comments</div>
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
                    <img src="https://scontent.fkhi17-1.fna.fbcdn.net/v/t1.6435-0/p526x296/195942680_3981968588586599_7745361254312436538_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=-mBgxLSh_gcAX9tNCpw&_nc_ht=scontent.fkhi17-1.fna&tp=6&oh=c427969eaecc005f4c28d799e3eb1ae5&oe=60D09A83" width="100%" alt="Post Img" />
                    <div className="d-flex justify-content-between align-items-center UX">
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className="w-50"><i class="lar la-thumbs-up pr-2"></i>Like</div>
                        </div>
                        |
                        <div className="d-flex justify-content-center align-items-center w-50">
                            <div className="w-50 comments"><i class="las la-comments pr-2"></i>Comments</div>
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