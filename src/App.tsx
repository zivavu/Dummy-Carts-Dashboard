import { useEffect, useState } from 'react';
import CartsList from './components/CartsList/CartsList';
import './styles.css';
import { ICart } from './types';

function App() {
  const [carts, setCarts] = useState<ICart[]>([]);

  useEffect(() => {
    const fetchCarts = async () => {
      const data = await fetch('https://dummyjson.com/carts');
      const json = await data.json();
      setCarts(json.carts);
    };

    fetchCarts().catch(console.error);
  }, []);

  return (
    <div className="wrapper">
      {carts ? <CartsList carts={carts} setCarts={setCarts}></CartsList> : null}
    </div>
  );
}

export default App;
