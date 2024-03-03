import Header from './components/Header';
import Meals from './components/Meals';
import Cart from './components/Cart';
import { CartContextProvider } from './store/CartContext';
import { UserProgressProvider } from './store/UserProgressContext';

function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
      </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
