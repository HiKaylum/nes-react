import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Icon from '../Icon/Icon';

function ReactIcon(props) {
  const {
    type,
    state,
    size
  } = props;

  const reactIconClasses = clsx(
    type,
    {
      [`is-${state}`]: state
    }
  );

  return (
    <Icon className={reactIconClasses} size={size} />
  );
}

ReactIcon.propTypes = {
  type: PropTypes.oneOf([
    'heart',
    'star',
    'like'
  ]).isRequired,
  state: PropTypes.oneOf([
    'half',
    'transparent',
    'empty'
  ]),
  size: PropTypes.oneOf([
    'small',
    'medium',
    'large'
  ]),
}

export default ReactIcon;
