import React from 'react';
import BasketSVG from '../../../assets/basket.svg';
import TrashCanSVG from '../../../assets/trash-can.svg';
import { ICart } from '../../../types';
import styles from './ListItem.module.css';
import { ListItemProps } from './types';

const ListItem = ({ cart, selectedCart, setSelectedCart, carts, setCarts }: ListItemProps) => {
  const handleCartSelect = () => {
    setSelectedCart(cart);
  };

  const handleCartDelete = async () => {
    const data = await fetch(`https://dummyjson.com/carts/${cart.id}`, {
      method: 'DELETE',
    });
    const responseCart = await data.json();
    const newCarts = carts.filter((oldCart) => oldCart.id !== responseCart.id) as ICart[];
    setCarts(newCarts);

    if (selectedCart?.id === responseCart.id) {
      setSelectedCart(undefined);
    }
  };

  const isSelected = selectedCart === cart;
  return (
    <div className={styles.item}>
      <button
        className={`${isSelected && styles.active} ${styles.fullSizeSelectButton}`}
        onClick={handleCartSelect}>
        <img src={BasketSVG} alt="basket" style={{ width: `30px`, paddingRight: `5px` }}></img>
        <div>
          <span style={{ fontSize: `1.1rem` }}>{cart.total}$</span>
          {/* <span className={styles.discounted}>{cart.discountedTotal}</span> */}
        </div>
      </button>
      <button onClick={handleCartDelete} className={styles.deleteButton}>
        <img src={TrashCanSVG} alt="basket" style={{ width: `20px` }}></img>
      </button>
    </div>
  );
};

export default ListItem;
