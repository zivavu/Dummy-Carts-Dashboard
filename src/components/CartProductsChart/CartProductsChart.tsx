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
  return data ? (
    <div className={styles.chartWrapper}>
      <ScatterChart
        margin={{ top: 45, bottom: 100, right: 100 }}
        width={800}
        height={800}
        data={data}>
        <CartesianGrid />
        <XAxis dataKey="title" tick={<CustomTickText />} minTickGap={-200} name="Name" />
        <YAxis>
          <Label value="Price" position="insideTop" offset={-25}></Label>
        </YAxis>
        <Tooltip labelFormatter={() => ''} itemStyle={{ textTransform: 'capitalize' }} />
        <Scatter
          type="monotone"
          dataKey="price"
          name="Price"
          line
          fill="#5b58d6"
          isAnimationActive={false}
        />
        <Scatter
          type="monotone"
          dataKey="discountedPrice"
          name="Discounted price"
          line
          fill="#49b349"
          isAnimationActive={false}
        />
      </ScatterChart>
    </div>
  ) : null;
};

export default CartProductsChart;
