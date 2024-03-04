import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/**
 * A modal dialog component that can be opened and closed.
 * @param {ReactNode} children - The contents of the modal dialog.
 * @param {boolean} open - Whether the modal is open or not.
 * @param {Function} onClose - A function to be called when the modal is closed.
 * @param {string} [className=''] - A CSS class name to apply to the modal dialog.
 */
const Modal = ({ children, open, onClose, className = '' }) => {
  const dialog = useRef();

  /**
   * Adds the modal dialog to the DOM and shows it if the `open` prop is true.
   */
  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => {
      modal.close();
    };
  }, [open]);

  return createPortal(
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById('modal')
  );
};

export default Modal;
