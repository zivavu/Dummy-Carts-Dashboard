export interface ICart {
  id: number;
  products: IProduct[];
  total: number;
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  userId: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
}
