import React, {Fragment} from 'react';
import {Link} from "react-router-dom"
import Header from "../Components/Header/Header"
import EmployeesList from "../Components/EmployeesList/EmployeesList"

const CurrentEmployees = ({employees}) => {
  return (
    <Fragment>
      <Header />
      <Link to={'/'}>homepage</Link>
      <EmployeesList employees={employees}/>
    </Fragment>
  );
};

export default CurrentEmployees;