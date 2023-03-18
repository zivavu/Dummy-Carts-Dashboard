import React from 'react';
import Basket from '../../../assets/basket.svg';
import styles from './ListItem.module.css';
import { ListItemProps } from './types';

const ListItem = ({ cart, isSelected, setSelectedCart }: ListItemProps) => {
  return (
    <button
      onClick={() => {
        console.log(isSelected && styles.active);
        setSelectedCart(cart);
      }}
      className={`${isSelected && styles.active} ${styles.item}`}>
      <img
        src={Basket}
        alt="basket"
        style={{ width: `30px`, paddingRight: `5px` }}></img>
      <div>
        <span style={{ fontSize: `1.1rem` }}>{cart.total}$</span>
        {/* <span className={styles.discounted}>{cart.discountedTotal}</span> */}
      </div>
    </button>
  );
};

export default ListItem;
