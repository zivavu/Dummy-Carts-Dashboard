import { IProduct } from "../../../../types";

export interface ProductAutocompleteInputProps {
  cartProducts: IProduct[];
  setCartsProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  initProduct: IProduct | null;
  index: number;
  isLoading: boolean;
}
