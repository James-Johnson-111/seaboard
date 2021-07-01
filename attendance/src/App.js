import React from 'react';

import './App.css';
import { Switch, Route } from 'react-router-dom';
import Attendance from './Components/Attendance/Attendance';
import Home from './Components/Attendance/Home/Home';
import ChooseLocation from './Components/Attendance/ChooseLocation/ChooseLocation';

const App = () => {

  return (
    <>
      <Switch>
        <Route exact path='/' component={ Attendance } />
        <Route exact path='/Home' component={ Home } />
        <Route exact path='/chooselocation' component={ ChooseLocation } />
      </Switch>
    </>
  )

}

export default App;