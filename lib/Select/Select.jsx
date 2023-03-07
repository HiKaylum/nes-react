import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Select(props) {
  const { 
    label,
    id,
    placeholder,
    options,
    type,
    isDark,
    ...others
  } = props;

  const selectClasses = clsx(
    'nes-select',
    {
      [`is-${type}`]: type,
      'is-dark': isDark
    }
  );

  return (
    <Fragment>
      <label htmlFor={id} style={{...(isDark && { color: '#fff' })}}>{label}</label>
      <div className={selectClasses}>
        <select id={id} {...others}>
          <option disabled selected hidden>{placeholder || 'Select...'}</option>
          {
            options.map((opt, idx) => {
              return <option key={idx} value={opt.value}>{opt.label}</option>
            })
          }
        </select>
      </div>
    </Fragment>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string,
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
      ])
    })
  ).isRequired,
  type: PropTypes.oneOf([
    'success',
    'warning',
    'error',
  ]),
  isDark: PropTypes.bool
}

export default Select;
