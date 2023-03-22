import { createContext, useEffect, useState } from 'react';
import styles from './App.module.css';
import CartProductsChart from './components/CartProductsChart/CartProductsChart';
import CartsList from './components/CartsList/CartsList';
import SiteHeading from './components/SiteHeading/SiteHeading';
import { ICart, ICartsContext } from './types';

export const CartsContext = createContext<ICartsContext>({} as ICartsContext);

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [selectedCart, setSelectedCart] = useState<ICart>();

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const data = await fetch('https://dummyjson.com/carts');
        const json = await data.json();
        setCarts(json.carts as ICart[]);
      } catch {
        console.error(console.error);
      }
    };
    fetchCarts();
  }, []);

  useEffect(() => {
    if (!selectedCart) return;
    //Scroll to selected cart in the list when it changes (e.g. after adding a new cart)
    const selectedCartElement = document.getElementById(`cart-${selectedCart.id}`);
    if (selectedCartElement) {
      selectedCartElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCart]);

  return (
    <CartsContext.Provider value={{ carts, setCarts, selectedCart, setSelectedCart }}>
      <div className={styles.aplicationWrapper}>
        <SiteHeading />
        <main className={styles.dashboardWrapper}>
          <CartsList />
          <CartProductsChart selectedCart={selectedCart} />
        </main>
      </div>
    </CartsContext.Provider>
  );
}

export default App;
