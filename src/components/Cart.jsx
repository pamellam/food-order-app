import { useContext } from 'react';

import Modal from './UI/Modal';
import UserProgressContext from '../store/UserProgressContext';
import CartContext from '../store/CartContext';
import Button from './UI/Button';
import CartItem from './CartItem';

import { currencyFormatter } from '../util/formattting';

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  /**
   * Calculates the total price of the cart
   * @function
   * @param {object} cart - cart object
   * @returns {number} total price of the cart
   */
  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  /**
   * Closes the cart modal
   * @function
   */
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  /**
   * Navigates to the checkout page
   * @function
   */
  function handleGoToCheckout() {
    userProgressCtx.showCheckout();
  }

  return (
    <Modal
      className="cart"
      open={userProgressCtx.progress === 'cart'}
      onClose={userProgressCtx.progress === 'cart' ? handleCloseCart : null}
    >
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => cartCtx.addItem(item)}
            onDecrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {cartCtx.items.length > 0 && (
          <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
        )}
      </p>
    </Modal>
  );
};

export default Cart;
