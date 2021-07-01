import React from 'react';

import './Topbar.css';
import Cookies from 'js-cookies';
import { useHistory } from 'react-router-dom';

const Topbar = () => {

    const history = useHistory();

    // console.log(window.location.href);
    const ChooseLocation = () => {

        if ( window.location.href.split('/').pop() === 'home' )
        {
            history.push('/chooselocation');
        }else
        {
            history.push('/home');
        }

    }

    const OnEmpLogout = () => {

        Cookies.removeItem('emp_id');
        Cookies.removeItem('loginID');
        Cookies.removeItem('timeIN');
        Cookies.removeItem('timeOUT');

    }

    return (
        <>
            <div className="Topbar">
                <div className="Topbar-left">
                    <p className="mb-0 firstP">Welcome To Seaboard Group, { Cookies.getItem('loginID') } </p>
                    <p className="mb-0 lastP">Welcome { Cookies.getItem('loginID') }</p>
                </div>
                <div className="Topbar-right">
                    <button className="btn" data-toggle="modal" data-target="#TimeInSuccess">
                        <i className="las la-bell"></i>
                    </button>
                    <button className="btn" onClick={ ChooseLocation }>
                        <i className="las la-ellipsis-v"></i>
                    </button>
                </div>
            </div>

            <div id="TimeInSuccess" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">


                    <div className="modal-content rounded" style={{ 'fontFamily': 'Poppins' }}>
                        <div className="modal-header">
                            <h4 className="modal-title">Today News</h4>
                            <button type="button" className="close p-0 m-0" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p className="p-3 m-0" style={{ 'backgroundColor': '#ECF0F5', 'borderRadius': '15px' }}>
                                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
                            </p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal" onClick={OnEmpLogout}>Logout</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Topbar;