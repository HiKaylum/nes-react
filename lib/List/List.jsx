import React from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

function List(props) {
  const {
    items,
    type,
    ...others
  } = props;

  const listClasses = clsx(
    'nes-list',
    {
      [`is-${type}`]: type
    }
  );

  return (
    <ul className={listClasses} {...others}>
      {
        items.map((item, idx) => {
          return <li key={idx}>{item}</li>
        })
      }
    </ul>
  );
}

List.defaultProps = {
  type: 'disc'
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  type: PropTypes.oneOf([
    'disc',
    'circle'
  ])
}

export default List;
