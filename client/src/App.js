import './App.css';

import { Switch, Route } from 'react-router-dom';
import Login from './Components/Auth/Login/Login';
import EmployeeForm from './Components/EmployeeForm/EmployeeForm';
import Dashboard from './Components/Dashboard/Dashboard';
import Logout from './Components/Auth/Logout/Logout';

const App = () => {

        return ( 
            <>
                <Switch>
                    <Route exact path='/' component={ Dashboard } />
                    <Route exact path='/login' component={ Login } />
                    <Route exact path='/logout' component={ Logout } />
                    <Route exact path='/employee' component={ EmployeeForm } />
                </Switch>
            </>
        )
}

export default App;