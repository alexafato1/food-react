import React, {useEffect, useState} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home'
import SearchRecipe from './SearchRecipe'
import User  from './User.js'
import Bookmarks from './Bookmarks'

function App() {


return (
    <div className="app">
      <Router>
     <Switch>
       
          <Route path="/User">
            <User/>
            </Route>
          <Route path="/SearchRecipe">
            <SearchRecipe />
         </Route>
         <Route path="/Bookmarks">
            <Bookmarks/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
         </Switch>
      </Router>
    </div>
  );
}

export default App;
