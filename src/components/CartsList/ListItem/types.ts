import { ICart } from '../../../types';

export interface ListItemProps {
  cart: ICart;
  selectedCart: ICart | undefined;
  setSelectedCart: React.Dispatch<React.SetStateAction<ICart | undefined>>;
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
}
