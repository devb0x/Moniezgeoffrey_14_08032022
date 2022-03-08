import React, {Fragment} from 'react';
import {Link} from "react-router-dom"

const CurrentEmployees = () => {
  return (
    <Fragment>
      <p>
        les employees (soon tm)
      </p>
      <Link to={'/'}>homepage</Link>
    </Fragment>
  );
};

export default CurrentEmployees;