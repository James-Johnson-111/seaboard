import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Attendance from './Components/Attendance/Attendance';
import Home from './Components/Attendance/Home/Home';

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path='/' component={ Attendance } />
        <Route exact path='/Home' component={ Home } />
      </Switch>
    </>
  )

}

export default App;