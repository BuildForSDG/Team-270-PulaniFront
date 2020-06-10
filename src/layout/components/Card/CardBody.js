import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import { cardBodyStyle } from '../../../assets/jss';

export const CardBody = props => {
  const classes = cardBodyStyle();
  const { className, children, plain, profile, ...rest } = props;

  const cardBodyClasses = clsx({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  children: PropTypes.node
};
