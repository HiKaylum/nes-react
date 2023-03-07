import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Icon(props) {
  const {
    type,
    size,
    className,
    ...others
  } = props;

  const iconClasses = clsx(
    'nes-icon',
    {
      [`is-${size}`]: size,
    },
    type,
    className
  );

  return (
    <i className={iconClasses} {...others} />
  );
}

Icon.defaultProps = {
  size: 'medium'
}

Icon.propTypes = {
  type: PropTypes.oneOf([
    'twitter',
    'facebook',
    'instagram',
    'github',
    'google',
    'gmail',
    'medium',
    'linkedin',
    'twitch',
    'youtube',
    'reddit',
    'whatsapp',
    'close',
    'trophy',
    'coin',
    'heart',
    'star',
    'like'
  ]).isRequired,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  className: PropTypes.string
}

export default Icon;
