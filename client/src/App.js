import React, { useEffect } from 'react';

import './App.css';

import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Logout from './Components/Auth/Logout/Logout';

import raw from './text.txt';
import axios from './axios';

const App = () => {

    const history = useHistory();

    useEffect(
        () => {
            history.push('/dashboard');
            // setInterval(() => {

                // fetch(raw)
                // .then(r => r.text())
                // .then(text => {

                //     let content = text.split('\n');
                //     let FirstLine = content.shift();

                //     content.filter(
                //         ( val, index, arr ) => {
                //             return val !== FirstLine;
                //         }
                //     )
                //     console.log( content );
                    
                //     var fso = CreateObject("Scripting.FileSystemObject");
                //     var s = fso.CreateTextFile("./text.txt", true);

                //     s.write(content);
                //     s.Close();

                // });

                // Get Last Modified date of file

                // axios.get('/gettimeinout').then( res => {
                //     console.log( res.data );
                // } ).catch(err => {
                //     console.log (err);
                // })
            // }, 500);
        }, []
    )

        return ( 
            <>
                <Switch>
                    <Route exact path='/dashboard' component={ Dashboard } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/logout' component={ Logout } />
                    <Route exact path='/employee' component={ Dashboard } />
                    <Route exact path='/descuss_chat/:id' component={ Dashboard } />

                    <Route exact path='/purchaserequisition' component={ Dashboard } />
                    <Route exact path='/purchaserorder' component={ Dashboard } />
                </Switch>
            </>
        )
}

export default App;