import React from 'react';
import Basket from '../../../assets/basket.svg';
import styles from './ListItem.module.css';
import { ListItemProps } from './types';

const ListItem = ({ cart, isSelected, setSelectedCart }: ListItemProps) => {
  return (
    <div className={styles.item}>
      <button
        className={`${isSelected && styles.active} ${styles.fullSizeSelectButton}`}
        onClick={() => {
          setSelectedCart(cart);
        }}>
        <img src={Basket} alt="basket" style={{ width: `30px`, paddingRight: `5px` }}></img>
        <div>
          <span style={{ fontSize: `1.1rem` }}>{cart.total}$</span>
          {/* <span className={styles.discounted}>{cart.discountedTotal}</span> */}
        </div>
      </button>
      <button></button>
    </div>
  );
};

export default ListItem;
