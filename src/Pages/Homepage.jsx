import React, {Fragment} from 'react';

import Header from "../Components/Header/Header"
import CreateEmployee from "../Components/CreateEmployee/CreateEmployee"

const Homepage = () => {
  return (
    <Fragment>
      <Header />
      <CreateEmployee />
    </Fragment>
  );
};

export default Homepage;