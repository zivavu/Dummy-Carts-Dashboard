import { ICart, IProduct } from './../../types';
export interface NewCartDialogProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
}

export interface ClickAwayListenerProps {
  children: React.ReactNode;
  clickAwayHandler: () => void;
}

export interface ProductAutocompleteInputProps {
  products: IProduct[];
}
