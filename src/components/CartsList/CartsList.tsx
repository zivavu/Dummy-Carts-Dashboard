import React from 'react';
import styles from './CartsList.module.css';
import ListItem from './ListItem/ListItem';
import { CartsListProps } from './types';

const CartsList = ({ carts, setCarts, selectedCart, setSelectedCart }: CartsListProps) => {
  return (
    <div className={styles.list}>
      {carts.map((cart) => {
        return (
          <ListItem
            key={cart.id}
            cart={cart}
            carts={carts}
            setCarts={setCarts}
            selectedCart={selectedCart}
            setSelectedCart={setSelectedCart}></ListItem>
        );
      })}
    </div>
  );
};

export default CartsList;
