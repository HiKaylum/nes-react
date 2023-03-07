import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from '../Icon/Icon';

function Badge(props) {
  const {
    href,
    type,
    label,
    splitType,
    splitIcon,
    splitLabel,
    ...others
  } = props;

  const badgeClasses = clsx(
    'nes-badge',
    {
      'is-icon': splitIcon && !splitLabel,
      'is-splited': splitLabel && !splitIcon
    }
  );

  const labelClasses = clsx(
    {
      [`is-${type}`]: type
    }
  );

  const splitClasses = clsx(
    {
      [`is-${splitType}`]: splitType
    }
  );

  return (
    <a className={badgeClasses} href={href} {...others}>
      {
        splitLabel && (
          <span className={splitClasses}>{splitLabel}</span>
        )
      }
      {
        splitIcon && (
          <span className={splitClasses}>{splitIcon}</span>
        )
      }
      <span className={labelClasses}>{label}</span>
    </a>
  );
}

Badge.defaultProps = {
  type: 'dark',
  splitType: 'dark'
};

Badge.propTypes = {
  href: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'dark'
  ]),
  label: PropTypes.string.isRequired,
  splitType: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'dark'
  ]),
  splitLabel: PropTypes.string,
  splitIcon: PropTypes.instanceOf(Icon)
};

export default Badge;
