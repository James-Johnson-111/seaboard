import React, { useEffect, useState } from 'react';

import './Attendance.css';
import Loading from './UI/Loading/Loading';
import axios from '../../axios';
import { useHistory } from 'react-router-dom';

import Cookies from 'js-cookies';

const Attendance = () => {

    const history = useHistory();
    const [ StartLoading, setStartLoading ] = useState(false);

    useEffect(
        () => {

            const Data = new FormData();
            // Data.append('companyID');
            setInterval(() => {
                axios.post('/gettimeinout').then(res => {
                
                    if ( res.data[0] !== 'n' )
                    {
                        setStartLoading( true );
                        console.log( res.data[0] );
                        Cookies.setItem('emp_id', res.data[0].emp_id);
                        Cookies.setItem('loginID', res.data[0].login_id);
                        Cookies.setItem('timeIN', res.data[0].time_in);
                        Cookies.setItem('timeOUT', res.data[0].time_out);
                        setTimeout(() => {
                            history.push('/home');
                        }, 1000);
                    }
    
                }).catch(err => {
                    console.log(err);
                });
            }, 100);

        }, []
    )

    return (
        <>
            <Loading show={ StartLoading } />
            <div className="Attendance">
                <img src="https://media.licdn.cn/dms/image/C4D0BAQGjTT6zqy8mnw/company-logo_200_200/0/1519856361309?e=2159024400&v=beta&t=Ukk_YxSt5cPCl7kfipK1vdtfjsC16kcL3ZRkQnjrkbI"
                     className="logo"
                />
            </div>
        </>
    )

}

export default Attendance;