import { ICart, IProduct } from '../../types';

export interface NewCartDialogProps {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface EditCartDialogProps {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  cartToEdit: ICart;
}

export interface DialogBaseProps {
  children: React.ReactNode;
  title: string;
  clickAwayHandler: () => void;
}
export interface ClickAwayListenerProps {
  children: React.ReactNode;
  clickAwayHandler: () => void;
}

export interface ProductAutocompleteInputProps {
  products: IProduct[];
  cartProducts: IProduct[];
  setCartsProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  initValue: string;
  index: number;
  isLoading: boolean;
}
