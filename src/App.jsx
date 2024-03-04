import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import { CartContextProvider } from './store/CartContext';
import { UserProgressProvider } from './store/UserProgressContext';
import Checkout from './components/Checkout';

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
