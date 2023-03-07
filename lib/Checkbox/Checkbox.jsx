import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Checkbox(props) {
  const {
    label,
    value,
    isDark,
    ...others
  } = props;

  const checkboxClasses = clsx(
    'nes-checkbox',
    {
      'is-dark': isDark
    }
  );

  return (
    <label>
      <input className={checkboxClasses} type="checkbox" value={value} {...others} />
      <span>{label}</span>
    </label>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  isDark: PropTypes.bool,
  onChange: PropTypes.func
}

export default Checkbox;
