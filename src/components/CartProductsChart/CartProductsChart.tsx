import React from "react";
import { CartesianGrid, Label, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from "recharts";
import styles from "./CartProductsChart.module.css";
import EmptyChartPlaceholder from "./ChartPlaceholders/EmptyChartPlaceholder";
import SingleItemChartPlaceholder from "./ChartPlaceholders/SingleItemChartPlaceholder";
import CustomTickText from "./CustomTickText/CustomTickText";
import CustomTooltip from "./CustomTooltip/CustomTooltip";
import { CartProductsChartProps } from "./types";

const CartProductsChart = ({ selectedCart }: CartProductsChartProps) => {
  let data = selectedCart?.products.map((product) => {
    const { title, price, total: totalPrice, discountedPrice: discountedTotal, quantity } = product;
    return {
      title,
      price,
      totalPrice,
      discountedTotal,
      quantity,
    };
  });

  //If there is only one element then we don't want to show the chart, but the placeholder instead
  if (data && data?.length < 2) data = undefined;

  return (
    <div className={styles.chartWrapper}>
      <ScatterChart
        margin={{
          top: 50,
          bottom: 50,
          left: 20,
          right: 80,
        }}
        width={800}
        height={800}
        data={data}
      >
        <CartesianGrid />
        <XAxis dataKey='title' tick={<CustomTickText />} minTickGap={-200} name='Name' />
        <YAxis>
          <Label value='Price' position='insideTop' offset={-25}></Label>
        </YAxis>
        <Tooltip content={<CustomTooltip />} />
        <Scatter
          type='monotone'
          dataKey='totalPrice'
          name='Price'
          line
          fill='#5b58d6'
          isAnimationActive={false}
        />
        <Scatter
          type='monotone'
          dataKey='discountedTotal'
          name='Discounted price'
          line
          fill='#49b349'
          isAnimationActive={false}
        />
      </ScatterChart>
      {!selectedCart ? <EmptyChartPlaceholder /> : null}
      {selectedCart && !data ? <SingleItemChartPlaceholder /> : null}
    </div>
  );
};

export default CartProductsChart;
