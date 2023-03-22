import React from 'react';
import TrashCanSVG from '../../../assets/trash-can.svg';
import { ICart } from '../../../types';
import listStyles from '../CartsList.module.css';
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
    <div className={styles.item} id={`cart-${cart.id}`}>
      <button
        className={`${isSelected && styles.active} ${styles.fullSizeSelectButton}`}
        onClick={handleCartSelect}>
        <span className={listStyles.firstColumn}>#{cart.id}</span>
        <span className={listStyles.secondColumn}> {cart.total}$</span>
        <span className={listStyles.thirdColumn}>{cart.discountedTotal}$</span>
      </button>
      <button
        onClick={handleCartDelete}
        className={`${isSelected && styles.active} ${listStyles.deleteButtonColumn} ${
          styles.deleteButton
        }`}>
        <img
          src={TrashCanSVG}
          alt="Trash can"
          className={styles.deleteSVG}
          style={{ width: `19px` }}></img>
      </button>
    </div>
  );
};

export default ListItem;
