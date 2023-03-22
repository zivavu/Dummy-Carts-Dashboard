import { ICart } from '../../types';

export interface CartProductsChartProps {
  selectedCart: ICart | undefined;
}

export interface CustomTooltipProps {
  active?: boolean;
  payload?: rechartsProductsPayloadData[];
  label?: any;
}

export interface rechartsProductsPayloadData {
  name: string;
  value: any;
  unit: string;
  type: string;
  dataKey: string;
  payload: {
    price: number;
    totalPrice: number;
    discountedTotal: number;
    quantity: number;
    title: string;
  };
}
