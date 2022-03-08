import React, {Fragment} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css';

import Homepage from "./Pages/Homepage"
import CurrentEmployees from "./Pages/CurrentEmployees"

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route
            exact path={'/'}
            element={ <Navigate to="/homepage" /> }
          />
          <Route
            exact path={'/homepage'}
            element={ <Homepage /> }
          />
          <Route
            exact path={'/employees'}
            element={ <CurrentEmployees /> }
          />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
