import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';


function Radios(props) {
  const {
    name,
    options,
    value,
    isDark,
    ...others
  } = props;

  const radioClasses = clsx(
    'nes-radio',
    {
      'is-dark': isDark
    }
  );

  return (
      options.map((opt, idx) => {
        return (
          <label key={idx}>
            <input checked={opt.value === value} className={radioClasses} type="radio" value={opt.value} name={name} {...others} />
            <span>{opt.label}</span>
          </label>
        );
      })
  );
}

Radios.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ])
    })
  ).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  isDark: PropTypes.bool,
  onChange: PropTypes.func
}

export default Radios;
