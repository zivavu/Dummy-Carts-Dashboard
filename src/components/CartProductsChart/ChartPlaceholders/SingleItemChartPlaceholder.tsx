import React from "react";
import styles from "./../CartProductsChart.module.css";

function SingleItemChartPlaceholder() {
  return (
    <span className={styles.chartPlaceholder}>
      You need at least two items in your cart to see the chart ;&#41;
    </span>
  );
}

export default SingleItemChartPlaceholder;
