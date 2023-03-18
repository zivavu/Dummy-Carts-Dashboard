import React from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
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
      <ScatterChart width={800} height={800} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" fontSize="0.8rem" />
        <YAxis>
          <Label value="Price" position="insideTop"></Label>
        </YAxis>
        <Tooltip />
        <Legend />
        <Scatter
          type="monotone"
          dataKey="price"
          name="Price"
          line
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Scatter
          type="monotone"
          dataKey="discountedPrice"
          name="Discounted price"
          line
          fill="#8884d8"
          stroke="#8884d8"
        />
      </ScatterChart>
    </div>
  );
};

export default CartProductsChart;
