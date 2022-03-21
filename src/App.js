import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css';

import Homepage from "./Pages/Homepage"
import CurrentEmployees from "./Pages/CurrentEmployees"
import Modal from "./UI/Modal"
import Header from "./Components/Header/Header"
import CreateEmployee from "./Components/CreateEmployee/CreateEmployee"

function App() {
  const [showModal, setShowModal] = useState(false)
  const [employees, setEmployees] = useState([])

  function saveEmployee(val) {
    setEmployees((prevState) => {
      localStorage.setItem("employees", JSON.stringify([...prevState, val]))
      return [...prevState, val]
    })
  }

  useEffect(() => {
    if (localStorage.getItem('employees') !== null) {
      const data = JSON.parse(localStorage.getItem('employees'))
      setEmployees(data)
    }
  },[])

  return (
    <Fragment>
      <Modal
        show={showModal}
        closeBtn={true}
        close={() => {setShowModal(false)}}
        padding={'10%'}
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
              <CreateEmployee
                displayModal={ () => {setShowModal(true)} }
                setEmployee={saveEmployee}
              />
            </Fragment>
          }
          />
          <Route
            exact path={'/employees'}
            element={ <CurrentEmployees  employees={employees} /> }
          />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App;
