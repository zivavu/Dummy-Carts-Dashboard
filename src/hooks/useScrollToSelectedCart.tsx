import React, { useContext, useEffect } from 'react';
import { CartsContext } from '../contexts/CartsContext';

const useScrollToSelectedCart = () => {
  const { selectedCart } = useContext(CartsContext);
  useEffect(() => {
    console.log(selectedCart);
    if (!selectedCart) return;
    //Scroll to selected cart in the list when it changes (e.g. after adding a new cart)
    const selectedCartElement = document.getElementById(`cart-${selectedCart.id}`);
    if (selectedCartElement) {
      selectedCartElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedCart]);
};

export default useScrollToSelectedCart;
