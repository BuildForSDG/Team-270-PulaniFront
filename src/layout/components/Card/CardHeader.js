import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { cardHeaderStyle } from '../../../assets/jss';

export const CardHeader = props => {
  const classes = cardHeaderStyle();
  const { className, children, color, plain, stats, icon, ...rest } = props;

  const cardHeaderClasses = clsx({
    [classes.cardHeader]: true,
    [classes[color + 'CardHeader']]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose'
  ]),
  plain: PropTypes.bool,
  stats: PropTypes.bool,
  icon: PropTypes.bool,
  children: PropTypes.node
};
