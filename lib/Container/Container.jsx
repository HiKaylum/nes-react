import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function Container(props) {
  const {
    children,
    title,
    isCentered,
    isDark,
    isRounded,
    ...others
  } = props;

  const containerClasses = clsx(
    'nes-container',
    {
      'with-title': title,
      'is-centered': isCentered,
      'is-dark': isDark,
      'is-rounded': isRounded
    }
  );

  return (
    <div className={containerClasses} {...others}>
      { title && <p className="title">{title}</p> }
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string,
  isCentered: PropTypes.bool,
  isDark: PropTypes.bool,
  isRounded: PropTypes.bool,
}

export default Container;
