import React from 'react';
import { CustomTooltipProps } from '../types';
import styles from './../CartProductsChart.module.css';

const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  const item = payload?.[0]?.payload;
  if (!item || !active) return null;
  const hoveredOver = payload[1]?.name === 'Price' ? 'price' : 'discountedPrice';
  const dynamicPriceString = item.quantity === 1 ? 'Price' : 'Total Price';
  return (
    <div className={styles.customTooltip}>
      <h4 style={{ textTransform: `capitalize` }} className={styles.title}>
        {item.title}
      </h4>
      <span className={styles.quantity}>Quantity: {item.quantity}pcs.</span>
      <span className={`${styles.price} ${hoveredOver === 'price' && styles.selected}`}>
        {dynamicPriceString}: {item.totalPrice}$
      </span>
      <span
        className={`${styles.discountedPrice} ${
          hoveredOver === 'discountedPrice' && styles.selected
        }`}>
        Discounted To: {item.discountedTotal}$
      </span>
      {item.quantity === 1 ? null : (
        <span className={styles.perItem}>Base Price/Item: {item.price}$</span>
      )}
    </div>
  );
};

export default CustomTooltip;
