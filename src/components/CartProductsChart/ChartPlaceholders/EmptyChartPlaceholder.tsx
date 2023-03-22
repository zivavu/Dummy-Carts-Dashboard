import React from 'react';
import styles from './../CartProductsChart.module.css';

function EmptyChartPlaceholder() {
  return (
    <span className={styles.chartPlaceholder}>
      Choose a cart from the list to see its content :&#41;
    </span>
  );
}

export default EmptyChartPlaceholder;
