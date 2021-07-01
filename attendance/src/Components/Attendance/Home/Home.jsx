import React, { useEffect, useState } from 'react';

import './Home.css';
import { useHistory } from 'react-router-dom';
import Topbar from './Topbar/Topbar';
import axios from '../../../axios';
import Cookies from 'js-cookies';
import $ from 'jquery';

const Home = () => {

    const currentDate = new Date();
    const history = useHistory();
    const [ TimeIN, setTimeIN ] = useState('TimeIn');
    const [ TimeOUT, setTimeOUT ] = useState('TimeOut');
    const [ BreakIN, setBreakIN ] = useState('BreakIn');
    const [ BreakOUT, setBreakOUT ] = useState('BreakOut');

    useEffect(
        () => {

            const Data = new FormData();
            Data.append('Emp_ID', Cookies.getItem('emp_id'));

            axios.post('/checktimein', Data).then( res => {

                if ( res.data[0] !== undefined )
                {
                    setTimeIN( 'Already TimeIn' );
                    $('.timein_div').css('background-color', '#ECF0F5');
                }

            } ).catch( err => {
                console.log( err );
            } );

        }, []
    )

    const OnEmpTimeIn = () => {
        
        if ( TimeIN !== 'Already TimeIn' )
        {

            const Data = new FormData();
            Data.append('Emp_ID', Cookies.getItem('emp_id'));
            Data.append('Emp_time_in', Cookies.getItem('timeIN'));
            axios.post('/timein', Data).then( response => {

                if ( response.data === 'success' )
                {

                    setTimeIN( 'TimeIn Success' );
                    $('.TimeInSuccess').trigger('click');
                    setTimeout(() => {
                        setTimeIN( 'Already TimeIn' );
                    }, 2000);

                }

            } ).catch( error => {

                console.log( error );

            } );

        }else 
        {
            $('.alreadyTimeIn').trigger('click');
        }

    }

    setInterval(() => {
        if (!Cookies.getItem('emp_id')) {
            history.push('/');
        }
    }, 100);

    return (
        <>
            <button className="d-none alreadyTimeIn" data-toggle="modal" data-target="#alreadyTimeIn"></button>
            <button className="d-none TimeInSuccess" data-toggle="modal" data-target="#TimeInSuccess"></button>
            <div className="Home">
                <Topbar />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4 pb-lg-1 pb-md-4 pb-sm-4">
                            <div className="divs timein_div" onClick={ OnEmpTimeIn }>
                                <div className="text-center">
                                    <i className="las la-user-clock mb-2"></i>
                                    <h3 className="mb-0"> { TimeIN } </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4 pb-lg-1 pb-md-4 pb-sm-4">
                            <div className="divs timeout_div">
                                <div className="text-center">
                                    <i className="las la-user-times mb-2"></i>
                                    <h3 className="mb-0"> { TimeOUT } </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4 pb-lg-1 pb-md-4 pb-sm-4">
                            <div className="divs breakin_div">
                                <div className="text-center">
                                    <i className="las la-utensils mb-2"></i>
                                    <h3 className="mb-0"> { BreakIN } </h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12 pt-lg-1 pt-md-4 pt-sm-4 pb-lg-1 pb-md-4 pb-sm-4">
                            <div className="divs breakout_div">
                                <div className="text-center">
                                    <i className="las la-redo mb-2"></i>
                                    <h3 className="mb-0"> { BreakOUT } </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p className="mb-0">© { currentDate.getFullYear() } seaboard.com.pk All Rights Reserved</p>
                </div>
            </div>

            <div id="alreadyTimeIn" className="modal fade" role="dialog">
                <div className="modal-dialog modal-dialog-centered">


                    <div className="modal-content rounded" style={ { 'fontFamily' : 'Poppins' } }>
                        <div className="modal-header">
                            <h4 className="modal-title">You Already TimeIn</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Home;