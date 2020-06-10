import React from 'react';
import { Layout } from 'react-admin';
import { PulaniAppBar } from './AppBar';

import { PulaniTheme, layoutStyle } from '../stylesheets';

export const PulaniLayout = props => {
  const classes = layoutStyle();

  return (
    <Layout
      {...props}
      appBar={PulaniAppBar}
      theme={PulaniTheme}
      className={classes.root}
    />
  );
};
