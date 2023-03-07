import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Button(props) {
  const {
    children,
    href,
    type,
    as,
    ...others
  } = props;

  const buttonClasses = clsx(
    'nes-btn',

    {
      [`is-${type}`]: type
    }
  );

  if (as === 'link') {
    return (
      <a className={buttonClasses} href={href} {...others}>{children}</a>
    );
  }

  if (as === 'file') {
    return (
      <label className={buttonClasses}>
        <span>{children}</span>
        <input type="file" {...others} />
      </label>
    );
  }

  return (
    <button className={buttonClasses} {...others}>{children}</button>
  );
}

Button.defaultProps = {
  as: 'button'
}

Button.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'disabled'
  ]),
  as: PropTypes.oneOf([
    'button',
    'link',
    'file'
  ]),
  href: function (props) {
    if (props['as'] === 'link') {
      return new Error ('href prop required when as a link')
    }
  }
}

export default Button;
