import React from 'react';
import { CustomTooltipProps } from '../types';
import styles from './../CartProductsChart.module.css';

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  const item = payload?.[0]?.payload;
  if (!item || !active) return null;
  const dynamicPriceString = item.quantity === 1 ? 'Price' : 'Total Price';
  return (
    <div className={styles.customTooltip}>
      <h4 className={styles.title}>{item.title}</h4>
      <span className={styles.quantity}>Quantity: {item.quantity}</span>
      <span className={styles.price}>
        {dynamicPriceString}: {item.totalPrice}$
      </span>
      <span className={styles.discountedPrice}>Discounted To: {item.discountedTotal}$</span>
      {item.quantity === 1 ? null : <span className={styles.perItem}>Per Item: {item.price}$</span>}
    </div>
  );
};

export default CustomTooltip;
