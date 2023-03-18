import { useEffect, useState } from 'react';
import CartProductsChart from './components/CartProductsChart/CartProductsChart';
import CartsList from './components/CartsList/CartsList';
import './styles.css';
import { ICart } from './types';

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [selectedCart, setSelectedCart] = useState<ICart>();

  useEffect(() => {
    const fetchCarts = async () => {
      const data = await fetch('https://dummyjson.com/carts');
      const json = await data.json();
      setCarts(json.carts as ICart[]);
      console.log(json.carts);
    };
    fetchCarts().catch(console.error);
  }, []);

  return (
    <div className="wrapper">
      <CartsList
        carts={carts}
        setCarts={setCarts}
        selectedCart={selectedCart}
        setSelectedCart={setSelectedCart}
      />
      <CartProductsChart selectedCart={selectedCart} />
    </div>
  );
}

export default App;
