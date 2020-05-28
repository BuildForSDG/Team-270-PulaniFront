import React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';

import { appBarStyle } from '../stylesheets';

export const PulaniAppBar = props => {
  const classes = appBarStyle();

  return (
    <AppBar {...props} className={classes.appBar}>
      <Typography
        color="inherit"
        className={classes.title}
        id="react-admin-title"
      />
      <Typography variant="h6" color="inherit">
        Pulani
      </Typography>
      <span className={classes.spacer} />
    </AppBar>
  );
};
