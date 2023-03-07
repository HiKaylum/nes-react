import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Avatar(props) {
  const {
    src,
    alt,
    size,
    isRounded
  } = props;

  const avatarClasses = clsx(
    'nes-avatar',
    {
      [`is-${size}`]: size,
      'is-rounded': isRounded
    }
  );

  return (
    <img className={avatarClasses} src={src} alt={alt} style={{imageRendering: "pixelated"}} />
  );
}

Avatar.defaultProps = {
  size: 'medium'
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
  isRounded: PropTypes.bool
}

export default Avatar;
