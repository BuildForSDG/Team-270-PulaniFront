import React from 'react';
import { Login } from 'react-admin';

import { PulaniTheme, loginStyle } from '../stylesheets';

const PulaniLoginPage = (props) => {
  const classes = loginStyle();

  return <Login theme={PulaniTheme} className={classes.login} {...props} />;
};

export default PulaniLoginPage;
