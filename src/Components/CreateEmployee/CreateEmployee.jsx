import React, {useRef} from 'react'

import classes from './CreateEmployee.module.css'

const CreateEmployee = () => {
  const firstnameInputRef = useRef()
  const lastnameInputRef = useRef()
  const birthDateInputRef = useRef()
  const startDateInputRef = useRef()
  const streetInputRef= useRef()
  const cityInputRef = useRef()
  const stateSelectRef= useRef()
  const zipcodeInputRef = useRef()
  const departmentSelectRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredFirstname = firstnameInputRef.current.value
    const enteredLastname = lastnameInputRef.current.value
    const enteredBirthDate = birthDateInputRef.current.value
    const enteredStartDate = startDateInputRef.current.value
    const enteredStreet = streetInputRef.current.value
    const enteredCity = cityInputRef.current.value
    const enteredState = stateSelectRef.current.value
    const enteredZipCode = zipcodeInputRef.current.value
    const enteredDepartment = departmentSelectRef.current.value
  }

  return (
    <section className={`${classes['create-section']}`}>
      <h2 className={`${classes['create-title']}`}>Create Employee</h2>
      <form className={`${classes['create-form']}`}>
        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            placeholder="Firstname"
            required
            ref={firstnameInputRef}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            placeholder="Lastname"
            required
            ref={lastnameInputRef}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="birth-date">Date of Birth</label>
          <input
            type="date"
            id="birth-date"
            placeholder="Date of Birth"
            required
            ref={birthDateInputRef}
          />
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="start-date">Date of Start</label>
          <input
            type="date"
            id="start-date"
            placeholder="Date of Start"
            required
            ref={startDateInputRef}
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
              ref={streetInputRef}
            />
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              placeholder="City"
              required
              ref={cityInputRef}
            />
            <label htmlFor="state">State</label>
            <select
              name="state"
              id="state"
              required
              ref={stateSelectRef}
            />
            <label htmlFor="zip-code">Zip Code</label>
            <input
              type="number"
              id="zip-code"
              placeholder="Zip Code"
              required
              ref={zipcodeInputRef}
            />
          </fieldset>
        </div>

        <div className={`${classes['create-form__div']}`}>
          <label htmlFor="department">Department</label>
          <select
            name="department"
            id="department"
            required
            ref={departmentSelectRef}
          >
            <option value="sales">Sales</option>
            <option value="marketing">Marketing</option>
            <option value="engineering">Engineering</option>
            <option value="human resources">Human Resources</option>
            <option value="legal">Legal</option>
          </select>
        </div>

        <button
          className={`${classes['create-form__btn']}`}
          onClick={submitHandler}
        >
          Save
        </button>

      </form>

    </section>
  );
};

export default CreateEmployee;