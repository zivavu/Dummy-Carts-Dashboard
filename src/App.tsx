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
      } catch {
        console.error(console.error);
      }
    };
    fetchCarts();
  }, []);

  return (
    <div className={styles.aplicationWrapper}>
      <SiteHeading setCarts={setCarts} />
      <main className={styles.dashboardWrapper}>
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
