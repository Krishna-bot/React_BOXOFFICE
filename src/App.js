import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Home from './page/Home';
import Star from './page/Star';
function App() {

  return (
  <div>

  <Switch>
    <Route exact   path = "/"><Home /></Route>
    <Route exact   path = '/star'><Star /></Route>
    <Route> <div> This 404 Page </div></Route>
  </Switch>
  </div>
  );
}


export default App;
