import React from 'react';
import {Link} from "react-router-dom"

const Header = () => {
  const company = 'HRnet'

  return (
    <header>
      <h1>{company}</h1>
      <Link to="/employees">View Current Employees</Link>
    </header>
  );
};

export default Header;