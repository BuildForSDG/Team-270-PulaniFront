import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { cardIconStyle } from '../../../assets/jss';

export const CardIcon = props => {
  const classes = cardIconStyle();
  const { className, children, color, ...rest } = props;

  const cardIconClasses = clsx({
    [classes.cardIcon]: true,
    [classes[color + 'CardHeader']]: color,
    [className]: className !== undefined
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

CardIcon.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ]),
  children: PropTypes.node
};
