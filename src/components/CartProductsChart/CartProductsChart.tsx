import React from 'react';
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Scatter,
  ScatterChart,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import styles from './CartProductsChart.module.css';
import CustomTickText from './CustomTickText';
import { CartProductsChartProps } from './types';

const CartProductsChart = ({ selectedCart }: CartProductsChartProps) => {
  const data = selectedCart?.products.map((product) => {
    const { title, price, discountedPrice } = product;
    return { title, price, discountedPrice };
  });
  return (
    <div className={styles.chartWrapper}>
      <ScatterChart
        margin={{ top: 50, bottom: 100, right: 100 }}
        width={800}
        height={800}
        data={data}>
        <CartesianGrid />
        <XAxis dataKey="title" tick={<CustomTickText />} minTickGap={-200} name="Name" />
        <YAxis>
          <Label value="Price" position="insideTop" offset={-30}></Label>
        </YAxis>
        <Tooltip labelFormatter={() => ''} />
        <Scatter type="monotone" dataKey="price" name="Price" line fill="#8884d8" />
        <Scatter
          type="monotone"
          dataKey="discountedPrice"
          name="Discounted price"
          line
          fill="#8884d8"
        />
      </ScatterChart>
    </div>
  );
};

export default CartProductsChart;
