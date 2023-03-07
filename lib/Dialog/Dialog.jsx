import React, { Fragment, useRef } from "react";
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Button from '../Button/Button';

function Dialog(props) {
  const {
    children,
    buttonType,
    buttonLabel,
    isRounded,
    isDark,
    onCancel,
    onConfirm,
    ...others
  } = props;

  const dialogEl = useRef(null);

  const openDialog = () => {
    dialogEl.current.showModal();
  }

  const dialogClasses = clsx(
    'nes-dialog',
    {
      'is-rounded': isRounded,
      'is-dark': isDark
    }
  );

  return (
    <Fragment>
      <Button type={buttonType} onClick={openDialog}>{ buttonLabel }</Button>
      <dialog ref={dialogEl} className={dialogClasses} {...others}>
        <form method="dialog">
          {children}
          <menu className="dialog-menu">
            <Button onClick={() => onCancel()}>Cancel</Button>
            <Button type="primary" onClick={() => onConfirm()}>Confirm</Button>
          </menu>
        </form>
      </dialog>
    </Fragment>
  );
}

Dialog.defaultProps = {
  onCancel: () => {},
  onConfirm: () => {}
}

Dialog.propTypes = {
  children: PropTypes.any.isRequired,
  buttonType: PropTypes.oneOf([
    'primary',
    'success',
    'warning',
    'error',
    'disabled'
  ]),
  buttonLabel: PropTypes.string.isRequired,
  isRounded: PropTypes.bool,
  isDark: PropTypes.bool,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func
}

export default Dialog;
