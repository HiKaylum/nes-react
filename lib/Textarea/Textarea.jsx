import React, { Fragment } from "react";
import PropTypes from 'prop-types';

function Textarea(props) {
  const { 
    label,
    id,
    ...others
  } = props;

  return (
    <Fragment>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} className="nes-textarea" {...others}></textarea>
    </Fragment>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

export default Textarea;
