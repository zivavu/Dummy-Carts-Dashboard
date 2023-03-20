import { useEffect, useState } from 'react';
import styles from './App.module.css';
import CartProductsChart from './components/CartProductsChart/CartProductsChart';
import CartsList from './components/CartsList/CartsList';
import SiteHeading from './components/SiteHeading/SiteHeading';
import { ICart } from './types';

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [selectedCart, setSelectedCart] = useState<ICart>();

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        const data = await fetch('https://dummyjson.com/carts');
        const json = await data.json();
        setCarts(json.carts as ICart[]);
        console.log(json.carts);
      } catch {
        console.error(console.error);
      }
    };
    fetchCarts();
  }, []);

  return (
    <div className={styles.contentWrapper}>
      <SiteHeading />
      <main className={styles.cartsWrapper}>
        <CartsList
          carts={carts}
          setCarts={setCarts}
          selectedCart={selectedCart}
          setSelectedCart={setSelectedCart}
        />
        <CartProductsChart selectedCart={selectedCart} />
      </main>
    </div>
  );
}

export default App;
