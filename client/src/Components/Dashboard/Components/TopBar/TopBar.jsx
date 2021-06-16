import React, { useEffect } from 'react';

import './TopBar.css';
import $ from 'jquery';
import { NavLink } from 'react-router-dom';

const TopBar = () => {

    useEffect(
        () => {

            $('.search_dropdown').slideUp(0);
            $('.emp_dropdown').slideUp(0);

            $('.Dashboard_main_content .content').on('click', () => {
                $('.emp_dropdown').slideUp(300);
                $('.search_dropdown').slideUp(300);
            });

            $('.search i').on('click', () => {
                $('.search_dropdown').toggle(300);
            });

            $('.emp_img').on('click', () => {
                $('.emp_dropdown').toggle(300);
            });

        }, []
    )

    return (
        <>
            <div className="Dashboard_topbar d-center shadow-sm">
                <div className="topbar_news">
                    <p className="mb-0" style={{ "whiteSpace": 'nowrap' }}>
                        <marquee direction="left">
                            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                        </marquee>
                    </p>
                </div>
                <div className="icons d-center">
                    <div className="px-3 search">
                        <i class="las la-search"></i>
                        <div class="btn-group search_dropdown" href="#">
                            <input type="search" className="form-control form-control-sm" />
                            <button className="btn btn-sm"><i className="las la-search"></i></button>
                        </div>
                    </div>
                    <div className="px-3 notification"> <div className="notification_number"></div> <i data-toggle="modal" data-target="#exampleModal" class="las la-bell"></i></div>
                    <div className="px-3 emp_img_container">
                        <div className="emp_img"></div>
                        <div className="emp_dropdown">
                            <p className="pl-4 pb-2 mb-1 font-weight-bold border-bottom">John Doe</p>
                            <NavLink to="/" className="d-center links">
                                <div className="pr-3"><i className="las la-user"></i></div>
                                <div className="links_txt">Profile</div>
                            </NavLink>
                            <NavLink to="/" className="d-center links">
                                <div className="pr-3"><i className="las la-tasks"></i></div>
                                <div className="links_txt">Settings</div>
                            </NavLink>
                            <NavLink to="/logout" className="d-center links">
                                <div className="pr-3"><i className="las la-sign-out-alt"></i></div>
                                <div className="links_txt">Logout</div>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Notifications</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="messages-content">
                                <h6 className="text-center">20-06-2021</h6>
                                <div className="message">
                                    <small>
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
                                    </small>
                                </div>
                                <h6 className="text-center">Today</h6>
                                <div className="message">
                                    <small>
                                        In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                                    </small>
                                </div>
                            </div>
                            <button type="button" class="btn btn-sm ml-auto d-block" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TopBar;