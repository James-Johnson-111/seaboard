import React from 'react';

import './App.css';

import { Switch, Route, useHistory } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Logout from './Components/Auth/Logout/Logout';

const App = () => {

    const history = useHistory();

    history.push('/dashboard');

        return ( 
            <>
                <Switch>
                    <Route exact path='/dashboard' component={ Dashboard } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/logout' component={ Logout } />
                    <Route exact path='/employee' component={ Dashboard } />
                    <Route exact path='/descuss_chat/:id' component={ Dashboard } />
                </Switch>
            </>
        )
}

export default App;