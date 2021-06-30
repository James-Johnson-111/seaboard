import React, { useEffect, useState } from 'react';

import './Attendance.css';
import Loading from './UI/Loading/Loading';
import axios from '../../axios';
import { useHistory } from 'react-router-dom';

const Attendance = () => {

    const history = useHistory();
    const [ StartLoading, setStartLoading ] = useState(false);

    useEffect(
        () => {

            setInterval(() => {
                axios.get('/gettimeinout').then(res => {
                
                    if ( res.data[0] !== 'n' )
                    {
                        console.log( res.data[0] );
                        history.push('/home');
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