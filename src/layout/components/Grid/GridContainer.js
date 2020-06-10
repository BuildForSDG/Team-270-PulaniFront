import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset"
  }
};

const useStyles = makeStyles(styles);

export const GridContainer = props => {
  const classes = useStyles();
  const { children, ...rest } = props;

  return (
    <Grid container {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node
};
