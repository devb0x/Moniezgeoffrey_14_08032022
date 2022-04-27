import React from 'react'
import {Link, useLocation} from "react-router-dom"

import classes from './Header.module.css'

const Header = () => {
  let location = useLocation()
  const company = 'HRnet'

  return (
    <header className={`${classes['navbar']}`}>
      <h1 className={`${classes['navbar-title']}`}>{company}</h1>
      {location.pathname !== '/employees' &&
        <Link to="/employees" className={`${classes['navbar-link']}`}>View Current Employees</Link>
      }
      {location.pathname === '/employees' &&
        <Link to="/homepage" className={`${classes['navbar-link']}`}>Homepage</Link>
      }
    </header>
  )
}

export default Header