import React, {Fragment, useState} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css';

import Homepage from "./Pages/Homepage"
import CurrentEmployees from "./Pages/CurrentEmployees"
import Modal from "./UI/Modal"
import Header from "./Components/Header/Header"
import CreateEmployee from "./Components/CreateEmployee/CreateEmployee"

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <Fragment>
      <Modal
        show={showModal}
        close={() => {setShowModal(false)}}
      />
      <Router>
        <Routes>
          <Route
            exact path={'/'}
            element={ <Navigate to="/homepage" /> }
          />
          <Route
            exact path={'/homepage'}
            element={
            <Fragment>
              <Header />
              <CreateEmployee displayModal={() => {
              setShowModal(true)}
              }/>
            </Fragment>
          }
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
