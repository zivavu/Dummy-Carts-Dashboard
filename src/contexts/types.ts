import { ICart, IProduct } from "../types";

export interface ICartsContext {
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  selectedCart: ICart | undefined;
  setSelectedCart: React.Dispatch<React.SetStateAction<ICart | undefined>>;
}

export interface IProductsListContext {
  productsList: IProduct[];
  areProductsLoading: boolean;
}
