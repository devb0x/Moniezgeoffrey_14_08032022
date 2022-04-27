import React, {Fragment} from 'react'

import EmployeesList from "../Components/EmployeesList/EmployeesList"

const CurrentEmployees = ({employees}) => {
  return (
    <Fragment>
      <EmployeesList employees={employees}/>
    </Fragment>
  )
}

export default CurrentEmployees