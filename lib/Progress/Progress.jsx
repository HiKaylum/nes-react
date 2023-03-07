import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Progress(props) {
  const {
    type,
    ...others
  } = props;

  const progressClasses = clsx(
    'nes-progress',
    {
      [`is-${type}`]: type
    }
  );

  return (
    <progress className={progressClasses} {...others} />
  );
}

Progress.propTypes = {
  type: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'pattern'
  ]),
}

export default Progress;
