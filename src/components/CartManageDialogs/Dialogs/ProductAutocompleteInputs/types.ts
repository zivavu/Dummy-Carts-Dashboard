import { IProduct } from '../../../types';

export interface ProductAutocompleteInputProps {
  cartProducts: IProduct[];
  setCartsProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  initValue: string;
  index: number;
  isLoading: boolean;
}
