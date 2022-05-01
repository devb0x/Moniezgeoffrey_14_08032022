import React, {Fragment, useEffect, useState} from "react"
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"

import './App.css'

// import {Modal} from "devb0x-react-modal"
import Modal from "./UI/Modal"

import CurrentEmployees from "./Pages/CurrentEmployees"
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
        title={"Employee successfully added"}
        textMessage={"The new employee was created !"}
        show={showModal}
        close={() => {setShowModal(false)}}
        padding={'10%'}
        closeBtn={true}
      />
      <Router>
        <Header />
        <Routes>
          <Route
            exact path={'/'}
            element={ <Navigate to="/homepage" /> }
          />
          <Route
            exact path={'/homepage'}
            element={
              <CreateEmployee
                displayModal={ () => {setShowModal(true)} }
                setEmployee={saveEmployee}
              />
            }
          />
          <Route
            exact path={'/employees'}
            element={ <CurrentEmployees  employees={employees} /> }
          />
          <Route
            path={'*'}
            element={ <Navigate to="/homepage" replace /> }
          />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App
