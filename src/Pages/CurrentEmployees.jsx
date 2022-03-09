import React, {Fragment} from 'react';
import {Link} from "react-router-dom"
import Header from "../Components/Header/Header"
import EmployeesList from "../Components/EmployeesList/EmployeesList"

const CurrentEmployees = () => {
  return (
    <Fragment>
      <Header />
      <Link to={'/'}>homepage</Link>
      <EmployeesList />
    </Fragment>
  );
};

export default CurrentEmployees;