import React, { useEffect, useState } from 'react';

import './Login.css';
import axios from '../../../axios.js';
import Cookies from 'js-cookies';

import { useHistory } from 'react-router-dom';
import Loading from '../../UI/Loading/Loading';

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

const Login = () => {

    // To change URL
    const history = useHistory();

    const [ UserData, setUserData ] = useState(
        {
            LoginID: '', LoginPass: ''
        }
        );
    
    // To show loading on true : false condition
    const [ StartLoading, setStartLoading ] = useState(true);

    useEffect( () => {

        setTimeout(() => {
            setStartLoading(false);
        }, 500);

    }, [] )

    // Call on change function to store input field data into usestate()
    const OnChangeHandler = ( e ) => {

        const { name, value } = e.target;
        const setValues = {
            ...UserData,
            [name]: value
        }

        setUserData(setValues);

    }

    // On form submition, the following function call
    const OnUserLogin = ( e ) => {

        e.preventDefault();
        setStartLoading(true);

        // console.log(cryptr.encrypt(UserData.LoginPass));
        axios.get('/getallusers').then( response => {

            for ( let x = 0; x < response.data.length; x++ )
            {
                
                // if the password and login id ofthe current index of an array is matched with 
                // the entered login id and password, the following condition will be true
                if ( UserData.LoginID === response.data[x].login_id && UserData.LoginPass === cryptr.decrypt(response.data[x].password) )
                {
                    
                    alert("Login success");
                    setStartLoading(false);
                    Cookies.setItem('LoginID', response.data[x].login_id);
                    setUserData( { LoginID: '', LoginPass: '' } );
                    history.push('/login');
                    
                }else
                {
                    setStartLoading(false);
                    setUserData( { LoginID: UserData.LoginID, LoginPass: '' } );
                    alert("User Not Found");
                }

            }

        } ).catch( error => {

            console.log( error );
            setStartLoading(false);

        } );

    }

    if (Cookies.getItem('LoginID')) {
        history.push('/dashboard');
    };

    return (
        <>
            {/* Login Form Component Start From Here */}
            <div className="Login d-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-2"></div>
                        <div className="col-lg-6 col-md-8 login-box">
                            <Loading display={StartLoading} width="100%" height="100%" position="absolute" />
                            <div className="col-lg-12 login-key">
                                <i className="las la-key"></i>
                            </div>
                            <div className="col-lg-12 login-title">
                                LOGIN SEABOARD
                            </div>

                            <div className="col-lg-12 login-form">
                                <div className="col-lg-12 login-form">
                                    <form onSubmit={  OnUserLogin } >
                                        <div className="form-group">
                                            <label className="form-control-label">LOGIN ID</label>
                                            <input value={ UserData.LoginID } onChange={ OnChangeHandler } name="LoginID" type="text" className="form-control" required minLength="3" />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-control-label">PASSWORD</label>
                                            <input value={ UserData.LoginPass } onChange={ OnChangeHandler } name="LoginPass" type="password" className="form-control" required minLength="3" />
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-outline-primary d-block mx-auto">LOGIN</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Login Form Component End Here */}
        </>
    )

}

export default Login;