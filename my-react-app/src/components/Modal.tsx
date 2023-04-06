import { create } from 'domain';
import React, { ReactNode, createRef, useEffect, useMemo } from 'react';
import ReactDOM, { createPortal } from 'react-dom';

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

function Modal(props: Props) {
  const { children, open, onClose } = props;
  if (!open) return null;
  return ReactDOM.createPortal(
    <div
      className="main-modal"
      data-id="1"
      onClick={(e) => {
        if (e.currentTarget === e.target) {
          onClose();
        }
      }}
    >
      <div className="main-modal__content">
        {' '}
        <button type="button" onClick={onClose}>
          Close modal
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
