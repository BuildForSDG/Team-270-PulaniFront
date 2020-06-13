import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { cardStyle } from '../../../assets/jss';

export const Card = props => {
  const classes = cardStyle();
  const { className, children, plain, profile, chart, ...rest } = props;

  const cardClasses = clsx({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    [className]: className !== undefined
  });

  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};
