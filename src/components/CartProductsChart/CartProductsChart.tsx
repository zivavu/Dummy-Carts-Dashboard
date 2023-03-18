import React from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './CartProductsChart.module.css';
import { CartProductsChartProps } from './types';

const CartProductsChart = ({ selectedCart }: CartProductsChartProps) => {
  const data = selectedCart?.products.map((product) => {
    const { title, price, discountedPrice } = product;
    return { title, price, discountedPrice };
  });
  return (
    <div className={styles.chartWrapper}>
      <LineChart width={800} height={800} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="price" name="Price" stroke="#8884d8" />
        <Line
          type="monotone"
          dataKey="discountedPrice"
          name="Discounted price"
          stroke="#8884d8"
        />
      </LineChart>
    </div>
  );
};

export default CartProductsChart;
