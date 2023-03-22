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
  discountedPrice: number;
  discountPercentage: number;
  quantity: number;
  total: number;
}

export interface ICartsContext {
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  selectedCart: ICart | undefined;
  setSelectedCart: React.Dispatch<React.SetStateAction<ICart | undefined>>;
}
