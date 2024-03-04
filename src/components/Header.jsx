import { useContext } from 'react';
import Button from './UI/Button';
import logo from '.././assets/logo.jpg';
import CartContext from '../store/CartContext';
import UserProgressContext from '../store/UserProgressContext';

/**
 * @function Header
 * @description This component is the main header of the application, containing the logo, the title, and the navigation buttons.
 * @returns {JSX.Element}
 */
const Header = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  /**
   * @function handleShowCart
   * @description This function is called when the user clicks on the cart button in the header. It will open the cart modal.
   */
  function handleShowCart() {
    userProgressCtx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="Restaurant Logo" />
        <h1>Food Order App </h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
