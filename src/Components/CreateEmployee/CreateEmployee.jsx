import React, {useEffect, useState} from 'react'
import { useForm } from "react-hook-form"

import classes from './CreateEmployee.module.css'

const CreateEmployee = (props) => {

  const { register, handleSubmit } = useForm()

  const submitHandler = (data) => {
    console.log(data)
    props.displayModal(true)
    props.setEmployee(data);
  }

  const states = [
    {
      "name": "Alabama",
      "abbreviation": "AL"
    },
    {
      "name": "Alaska",
      "abbreviation": "AK"
    },
    {
      "name": "American Samoa",
      "abbreviation": "AS"
    },
    {
      "name": "Arizona",
      "abbreviation": "AZ"
    },
    {
      "name": "Arkansas",
      "abbreviation": "AR"
    },
    {
      "name": "California",
      "abbreviation": "CA"
    },
    {
      "name": "Colorado",
      "abbreviation": "CO"
    },
    {
      "name": "Connecticut",
      "abbreviation": "CT"
    },
    {
      "name": "Delaware",
      "abbreviation": "DE"
    },
    {
      "name": "District Of Columbia",
      "abbreviation": "DC"
    },
    {
      "name": "Federated States Of Micronesia",
      "abbreviation": "FM"
    },
    {
      "name": "Florida",
      "abbreviation": "FL"
    },
    {
      "name": "Georgia",
      "abbreviation": "GA"
    },
    {
      "name": "Guam",
      "abbreviation": "GU"
    },
    {
      "name": "Hawaii",
      "abbreviation": "HI"
    },
    {
      "name": "Idaho",
      "abbreviation": "ID"
    },
    {
      "name": "Illinois",
      "abbreviation": "IL"
    },
    {
      "name": "Indiana",
      "abbreviation": "IN"
    },
    {
      "name": "Iowa",
      "abbreviation": "IA"
    },
    {
      "name": "Kansas",
      "abbreviation": "KS"
    },
    {
      "name": "Kentucky",
      "abbreviation": "KY"
    },
    {
      "name": "Louisiana",
      "abbreviation": "LA"
    },
    {
      "name": "Maine",
      "abbreviation": "ME"
    },
    {
      "name": "Marshall Islands",
      "abbreviation": "MH"
    },
    {
      "name": "Maryland",
      "abbreviation": "MD"
    },
    {
      "name": "Massachusetts",
      "abbreviation": "MA"
    },
    {
      "name": "Michigan",
      "abbreviation": "MI"
    },
    {
      "name": "Minnesota",
      "abbreviation": "MN"
    },
    {
      "name": "Mississippi",
      "abbreviation": "MS"
    },
    {
      "name": "Missouri",
      "abbreviation": "MO"
    },
    {
      "name": "Montana",
      "abbreviation": "MT"
    },
    {
      "name": "Nebraska",
      "abbreviation": "NE"
    },
    {
      "name": "Nevada",
      "abbreviation": "NV"
    },
    {
      "name": "New Hampshire",
      "abbreviation": "NH"
    },
    {
      "name": "New Jersey",
      "abbreviation": "NJ"
    },
    {
      "name": "New Mexico",
      "abbreviation": "NM"
    },
    {
      "name": "New York",
      "abbreviation": "NY"
    },
    {
      "name": "North Carolina",
      "abbreviation": "NC"
    },
    {
      "name": "North Dakota",
      "abbreviation": "ND"
    },
    {
      "name": "Northern Mariana Islands",
      "abbreviation": "MP"
    },
    {
      "name": "Ohio",
      "abbreviation": "OH"
    },
    {
      "name": "Oklahoma",
      "abbreviation": "OK"
    },
    {
      "name": "Oregon",
      "abbreviation": "OR"
    },
    {
      "name": "Palau",
      "abbreviation": "PW"
    },
    {
      "name": "Pennsylvania",
      "abbreviation": "PA"
    },
    {
      "name": "Puerto Rico",
      "abbreviation": "PR"
    },
    {
      "name": "Rhode Island",
      "abbreviation": "RI"
    },
    {
      "name": "South Carolina",
      "abbreviation": "SC"
    },
    {
      "name": "South Dakota",
      "abbreviation": "SD"
    },
    {
      "name": "Tennessee",
      "abbreviation": "TN"
    },
    {
      "name": "Texas",
      "abbreviation": "TX"
    },
    {
      "name": "Utah",
      "abbreviation": "UT"
    },
    {
      "name": "Vermont",
      "abbreviation": "VT"
    },
    {
      "name": "Virgin Islands",
      "abbreviation": "VI"
    },
    {
      "name": "Virginia",
      "abbreviation": "VA"
    },
    {
      "name": "Washington",
      "abbreviation": "WA"
    },
    {
      "name": "West Virginia",
      "abbreviation": "WV"
    },
    {
      "name": "Wisconsin",
      "abbreviation": "WI"
    },
    {
      "name": "Wyoming",
      "abbreviation": "WY"
    }
  ];

  return (
    <section className={`${classes['create-section']}`}>
      <h2 className={`${classes['create-title']}`}>Create Employee</h2>
      <form className={`${classes['create-form']}`} onSubmit={handleSubmit(submitHandler)}>
        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Firstname"
            {...register("firstname")}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Lastname"
            required
            {...register("lastname")}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="birth-date">Date of Birth</label>
          <input
            type="date"
            id="birth-date"
            placeholder="Date of Birth"
            required
            {...register("birthDate")}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="start-date">Date of Start</label>
          <input
            type="date"
            id="start-date"
            placeholder="Date of Start"
            required
            {...register("startDate")}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <fieldset>
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              type="text"
              id="street"
              placeholder="Street"
              required
              {...register("street")}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="City"
              required
              {...register("city")}
            />
            <label htmlFor="state">State</label>
              <select name="state" id="state" className={`${classes['select']}`} required>
                {states.map(state => (
                  <option
                    key={state.name}
                    value={state.name}
                    {...register("state")}
                  >
                    {state.name}
                  </option>
                ))}
              </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              placeholder="Zip Code"
              required
              {...register("zipCode")}
            />
          </fieldset>
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="department">Department</label>
          <select
            className={`${classes['select']}`}
            name="department"
            id="department"
            required
            {...register("department")}
          >
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="human resources">Human Resources</option>
            <option value="legal">Legal</option>
          </select>
        </div>

        <button
          type={'submit'}
          className={`${classes['create-form__btn']}`}
        >
          Save
        </button>

      </form>

    </section>
  )
}

export default CreateEmployee