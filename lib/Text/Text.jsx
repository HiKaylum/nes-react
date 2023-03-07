import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Text(props) {
  const {
    children,
    type,
    ...others
  } = props;

  const textClasses = clsx(
    'nes-text',
    {
      [`is-${type}`]: type
    }
  );

  return (
    <span className={textClasses} {...others}>{ children }</span>
  );
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'disabled'
  ])
}

export default Text;
