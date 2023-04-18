import { ReactNode } from 'react';
import ReactDOM from 'react-dom';

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
      aria-hidden="true"
    >
      <div className="main-modal__content">
        {' '}
        <button className="modal_close" type="button" onClick={onClose}>
          &#10008;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;
