import React, {Fragment} from 'react'

import classes from './EmployeesList.module.css'

function EmployeesList() {
  const dataCategory = [
    'First Name', 'Last Name', 'Start Date', 'Department', 'Birth Date', 'Street', 'City', 'State', 'Zip Code'
  ]
  const employeesMock = [
    {
      id: 1,
      firstname: 'firstname',
      lastname: 'lastname',
      startDate: '05/05/2022',
      department: 'Business',
      birthDate: '21/12/1984',
      street: 'Jean Dupont',
      city: 'Escaudain',
      state: 'Nord',
      zipCode: '59124'
    },
    {
      id: 2,
      firstname: 'firstname',
      lastname: 'lastname',
      startDate: '05/05/2022',
      department: 'Business',
      birthDate: '21/12/1984',
      street: 'Jean Dupont',
      city: 'Escaudain',
      state: 'Nord',
      zipCode: '59124'
    },
    {
      id: 3,
      firstname: 'firstname',
      lastname: 'lastname',
      startDate: '05/05/2022',
      department: 'Business',
      birthDate: '21/12/1984',
      street: 'Jean Dupont',
      city: 'Escaudain',
      state: 'Nord',
      zipCode: '59124'
    },
    {
      id: 4,
      firstname: 'firstname',
      lastname: 'lastname',
      startDate: '05/05/2022',
      department: 'Business',
      birthDate: '21/12/1984',
      street: 'Jean Dupont',
      city: 'Escaudain',
      state: 'Nord',
      zipCode: '59124'
    },
    {
      id: 5,
      firstname: 'firstname',
      lastname: 'lastname',
      startDate: '05/05/2022',
      department: 'Business',
      birthDate: '21/12/1984',
      street: 'Jean Dupont',
      city: 'Escaudain',
      state: 'Nord',
      zipCode: '59124'
    },
  ]

  return (
    <section className={`${classes['employees-section']}`}>
      <h2 className={`${classes['employees-section__title']}`}>Current Employees</h2>
      <div>
        <table className={`${classes['table']}`}>
          <thead>
            <tr>
              <th>Current Employees</th>
            </tr>
            <tr className={`${classes['table-row__filter']}`}>
              <td>Show 10 entries</td>
              <td>
                <input type="text" placeholder="search" />
              </td>
            </tr>
          </thead>
          <tbody className={`${classes['table-body']}`}>

            <tr className={`${classes['table-row__category']}`}>
              {dataCategory.map((el, index) => (
                <th key={index}>
                  {el}
                </th>
              ))}
            </tr>

            {employeesMock.map(obj => (
              <tr className={`${classes['table-row']}`} key={obj.id}>
                {Object.entries(obj).slice(1).map(([key, val], i) => {
                  return (
                    <th key={i}>
                      {val}
                    </th>
                  )
                })}
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </section>
  )
}

export default EmployeesList