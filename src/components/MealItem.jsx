import { useContext } from 'react';

import Button from './UI/Button';
import { currencyFormatter } from '../util/formattting';
import CartContext from '../store/CartContext';

/**
 * @param {object} meal - The meal object to be rendered
 * @param {string} meal.name - The name of the meal
 * @param {string} meal.image - The image of the meal
 * @param {number} meal.price - The price of the meal
 * @param {string} meal.description - The description of the meal
 * @returns {JSX.Element} - The meal item component
 */
const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  /**
   * Adds the meal to the cart
   */
  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default MealItem;
