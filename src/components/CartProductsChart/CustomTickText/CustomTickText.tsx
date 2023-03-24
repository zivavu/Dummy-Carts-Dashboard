import React from 'react';
import { Text } from 'recharts';

const CustomTickText = (props: any) => {
  const { x, y, payload } = props;

  return (
    <Text
      x={x}
      y={y}
      style={{ wordWrap: `break-word`, textTransform: `capitalize` }}
      width={140}
      dominantBaseline="central"
      textAnchor="middle"
      fontSize="0.8rem"
      verticalAnchor="start">
      {payload.value}
    </Text>
  );
};

export default CustomTickText;
