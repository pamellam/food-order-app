import { currencyFormatter } from '../util/formattting';

/**
 * @param {string} name - the name of the item
 * @param {number} quantity - the quantity of the item
 * @param {number} price - the price of the item
 * @param {function} onIncrease - a function to increase the quantity of the item
 * @param {function} onDecrease - a function to decrease the quantity of the item
 * @returns {JSX.Element} - the CartItem component
 */
const CartItem = ({ name, quantity, price, onIncrease, onDecrease }) => {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} * {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrease}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrease}>+</button>
      </p>
    </li>
  );
};

export default CartItem;
