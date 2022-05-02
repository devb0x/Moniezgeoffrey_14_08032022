import React from 'react'
import { Controller, useForm } from "react-hook-form"

import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import {format, getMonth, getYear} from 'date-fns'
import range from "lodash/range"

import classes from './CreateEmployee.module.css'

const CreateEmployee = (props) => {
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

  const { register, handleSubmit, control, reset } = useForm({
    mode: 'onChange',
    defaultValues: {
      birthDate: '',
      city: '',
      department: 'sales',
      firstname: '',
      lastname: '',
      startDate: '',
      state: 'Alabama',
      street: '',
      zipCode: ''
    }
  })

  const submitHandler = (data) => {
    console.log('form is submit')
    const date1 = format(data.birthDate, 'yyyy-MM-dd')
    const date2 = format(data.startDate, 'yyyy-MM-dd')
    props.setEmployee({...data, birthDate: date1, startDate: date2})
    props.displayModal(true)
    reset()
  }

  const CustomDatePicker = (props) => {
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return (
      <DatePicker
        className={`${classes['datepicker']}`}
        todayButton="Today"
        renderCustomHeader={({
           date,
           changeYear,
           changeMonth,
           decreaseMonth,
           increaseMonth,
           prevMonthButtonDisabled,
           nextMonthButtonDisabled,
       }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <button
              onClick={(e) => {
                e.preventDefault()
                return decreaseMonth
              }}
              disabled={prevMonthButtonDisabled}
            >
              {"<"}
            </button>
            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={getYear(date)}
              onChange={({ target: { value } }) =>
                changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              onClick={(e) => {
                e.preventDefault()
                return increaseMonth
              }}
              disabled={prevMonthButtonDisabled}
            >              {">"}
            </button>
          </div>
        )}
        {...props}
      />
    )
  }

  return (
    <section className={`${classes['create-section']}`}>
      <h2 className={`${classes['create-title']}`}>Create Employee</h2>
      <form className={`${classes['create-form']}`} onSubmit={handleSubmit(submitHandler)}>
        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="firstname">First Name</label>
          <input
            data-testid={"firstname"}
            type="text"
            id="firstname"
            placeholder="Firstname"
            {...register("firstname")}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            data-testid={"lastname"}
            type="text"
            id="lastname"
            placeholder="Lastname"
            required
            {...register("lastname")}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="birth-date">Date of Birth</label>
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => {
              return (
                <CustomDatePicker
                  onChange={(date) => {
                    return field.onChange(date);
                  }}
                  selected={field.value}
                  placeholderText="mm/dd/yyyy"
                />
              )
            }}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="start-date">Date of Start</label>
          <Controller
            name="startDate"
            control={control}
            render={({ field }) => {
              return (
                <CustomDatePicker
                  onChange={(date) => {
                    return field.onChange(date);
                  }}
                  selected={field.value}
                  placeholderText="mm/dd/yyyy"
                />
              )
            }}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <fieldset>
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              data-testid={"street"}
              type="text"
              id="street"
              placeholder="Street"
              required
              {...register("street")}
            />
            <label htmlFor="city">City</label>
            <input
              data-testid={"city"}
              type="text"
              id="city"
              placeholder="City"
              required
              {...register("city")}
            />
            <label htmlFor="state">State</label>
              <select
                data-testid={"state"}
                name="state" id="state"
                className={`${classes['select']}`}
                required
              >
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
              data-testid={"zipcode"}
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
            data-testid={"department"}
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
          data-testid={"button"}
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
