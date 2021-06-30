import React, { useEffect } from 'react';

import { NavLink } from 'react-router-dom';
import './SideBar.css';
import $ from 'jquery';

const SideBar = ( props ) => {

    useEffect(
        () => {

            $('.forms_link').on( 'click', () => {
                if ( $('.forms_link').find('i').hasClass('la-caret-right') )
                {
                    $('.la-caret-right').removeClass('la-caret-right').addClass('la-caret-down');
                    $('.Forms_options').slideDown();
                }else {
                    $('.la-caret-down').removeClass('la-caret-down').addClass('la-caret-right');
                    $('.Forms_options').slideUp();
                }
            } );

            $('.Forms_options').slideUp(0);

        }, []
    )

    return (
        <>
            {/* style={ { 'width' : props.show ? '100vw' : '0' } } */}
            <div className="Dashboard_sideBar" >

                <div className="Dashboard_logo d-center">
                    <div><h4 className="mb-0 logo">SEABOARD</h4></div>
                    <div><button className="btn btn-sm p-0 m-0 sideBar_bars"><i className="las la-bars"></i></button></div>
                </div>

                <div className="Dashboard_links">
                    <NavLink activeClassName="Dashboard_active" to="/dashboard" className="d-center links">
                        <div className="pr-3"><i className="las la-home"></i></div>
                        <div className="links_txt">Home</div>
                    </NavLink>
                    <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                        <div className="pr-3"><i className="lar la-newspaper"></i></div>
                        <div className="links_txt">News</div>
                    </NavLink>
                    <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                        <div className="pr-3"><i className="lab la-rocketchat"></i></div>
                        <div className="links_txt">Chat</div>
                    </NavLink>
                    <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                        <div className="pr-3"><i className="las la-video"></i></div>
                        <div className="links_txt">Black Board</div>
                    </NavLink>
                    <NavLink activeClassName="Dashboard_active" to="/employee" className="d-center links">
                        <div className="pr-3"><i className="las la-user-cog"></i></div>
                        <div className="links_txt">Employment Setup</div>
                    </NavLink>
                    <div className="d-center links forms_link">
                        <div className="pr-3"><i className="las la-server"></i></div>
                        <div className="d-flex justify-content-between w-100">
                            <div className="links_txt">Forms</div>
                            <div className="links_txt"><i className="las la-caret-right" style={{ 'fontSize': '12px' }}></i></div>
                        </div>
                    </div>
                    <div className="Forms_options">
                        <NavLink activeClassName="Dashboard_active" to="/purchaserequisition" className="d-center links">
                            <div className="pr-3"><i className="las la-hand-holding-usd"></i></div>
                            <div className="links_txt">Purchase Requisition</div>
                        </NavLink>
                        <NavLink activeClassName="Dashboard_active" to="/purchaserorder" className="d-center links">
                            <div className="pr-3"><i className="las la-border-none"></i></div>
                            <div className="links_txt">Purchase Order</div>
                        </NavLink>
                        <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                            <div className="pr-3"><i className="las la-exchange-alt"></i></div>
                            <div className="links_txt">Transfer Form</div>
                        </NavLink>
                        <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                            <div className="pr-3"><i className="las la-percent"></i></div>
                            <div className="links_txt">Disposal Form</div>
                        </NavLink>
                        <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                            <div className="pr-3"><i className="lab la-pagelines"></i></div>
                            <div className="links_txt">Leave Form</div>
                        </NavLink>
                    </div>
                    <NavLink activeClassName="Dashboard_active" to="/news" className="d-center links">
                        <div className="pr-3"><i className="lab la-google-drive"></i></div>
                        <div className="links_txt">Drive</div>
                    </NavLink>
                </div>
            </div>
        </>
    )

};

export default SideBar;