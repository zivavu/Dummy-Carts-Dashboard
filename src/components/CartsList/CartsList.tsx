import React from 'react';
import TrashCanSVG from '../../assets/trash-can.svg';
import styles from './CartsList.module.css';
import ListItem from './ListItem/ListItem';
import { CartsListProps } from './types';

const CartsList = ({ carts, setCarts, selectedCart, setSelectedCart }: CartsListProps) => {
  return (
    <aside className={styles.list}>
      <h2 className={styles.listTitle}>Your Carts</h2>
      <div className={styles.listHeader}>
        <span className={styles.firstColumn}>ID</span>
        <span className={styles.secondColumn}>Total Price</span>
        <span className={styles.thirdColumn}>Discounted To</span>
        <div style={{ marginLeft: `auto` }} className={styles.deleteButtonColumn}>
          <img
            src={TrashCanSVG}
            alt="basket"
            className={styles.deleteSVG}
            style={{ width: `20px` }}></img>
        </div>
      </div>
      <div className={styles.listContent}>
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
    </aside>
  );
};

export default CartsList;
