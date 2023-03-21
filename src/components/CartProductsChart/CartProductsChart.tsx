import React from 'react';
import { CartesianGrid, Label, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import styles from './CartProductsChart.module.css';
import ChartPlaceholder from './ChartPlaceholder';
import CustomTickText from './CustomTickText/CustomTickText';
import { CartProductsChartProps } from './types';

const CartProductsChart = ({ selectedCart }: CartProductsChartProps) => {
  const data = selectedCart?.products.map((product) => {
    const { title, price, discountedPrice } = product;
    return { title, price, discountedPrice };
  });
  return (
    <div className={styles.chartWrapper}>
      <ScatterChart
        margin={{ top: 50, bottom: 50, left: 20, right: 80 }}
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
      {data ? null : <ChartPlaceholder />}
    </div>
  );
};

export default CartProductsChart;
