import { useEffect, useState } from 'react';
import './styles.css';

function App() {
  const [carts, setCarts] = useState();
  useEffect(() => {
    const fetchCarts = async () => {
      const data = await fetch('https://dummyjson.com/carts');
      const json = await data.json();
      setCarts(json.carts);
    };

    fetchCarts().catch(console.error);
  }, []);

  return <div></div>;
}

export default App;
