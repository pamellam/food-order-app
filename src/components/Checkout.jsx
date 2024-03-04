/**
 * @fileOverview Checkout component
 */

import { useContext } from 'react';

import Modal from './UI/Modal';
import CartContext from '../store/CartContext';
import Input from './UI/Input';
import Button from './UI/Button';
import UserProgressContext from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formattting';
import useHttp from '../hooks/useHttp';

/**
 * Checkout component
 * @returns {JSX.Element}
 */
const Checkout = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const requestConfig = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    clearData,
  } = useHttp('http://localhost:3000/orders', requestConfig);

  /**
   * Calculate the total price of the cart
   * @returns {number}
   */
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  /**
   * Close the checkout modal
   */
  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  /**
   * Finish the checkout process
   */
  function handleFinish() {
    userProgressCtx.hideCheckout();
    cartCtx.clearCart();
    clearData();
  }

  /**
   * Submit the checkout form
   * @param {Event} e
   */
  function handleSubmit(e) {
    e.preventDefault();

    // Access data by using FormData API
    const formData = new FormData(e.target);
    const customerData = Object.fromEntries(formData.entries()); // {email: test@example.com }

    // send post request to backend
    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <p>Sending order data ...</p>;
  }

  if (data && !error) {
    return (
      <Modal
        onClose={handleFinish}
        open={userProgressCtx.progress === 'checkout'}
      >
        <h2>Thank you for your order!</h2>
        <p> We will get back to you with more details via email.</p>
        <p className="modal-actions">
          <Button onClick={handleFinish}> OK </Button>
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>
        <Input label="Full Name" id="name" type="text" />
        <Input label="E-mail Address" id="email" type="email" />
        <Input label="Street" id="street" type="text" />
        <div className="control-row">
          <Input label="Postal Code" id="postal-code" type="text"></Input>
          <Input label="City" id="city" type="text"></Input>
        </div>
        {error && <Error title="Failed to submit order." message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
};

export default Checkout;
