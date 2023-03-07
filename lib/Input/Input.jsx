import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Input(props) {
  const {
    label,
    isInline,
    isDark,
    type,
    id,
    ...others
  } = props;

  const fieldClasses = clsx(
    'nes-field',
    {
      'is-inline': isInline
    }
  );

  const inputClasses = clsx(
    'nes-input',
    {
      [`is-${type}`]: type,
      'is-dark': isDark
    }
  );

  return (
    <div className={fieldClasses}>
      <label htmlFor={id} style={{...(isDark && { color: '#fff' })}}>{label}</label>
      <input type="text" id={id} className={inputClasses} {...others} />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isInline: PropTypes.bool,
  type: PropTypes.oneOf([
    'success',
    'warning',
    'error',
  ]),
  isDark: PropTypes.bool
}

export default Input;
