import React from 'react';
import styles from './ListItem.module.css';
import { ListItemProps } from './types';

const ListItem = ({ cart }: ListItemProps) => {
  console.log(cart);
  return (
    <div className={styles.item}>
      <div>{cart.total}</div>
      <div>{cart.discountedTotal}</div>
    </div>
  );
};

export default ListItem;
