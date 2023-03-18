import { ICart } from '../../../types';

export interface ListItemProps {
  cart: ICart;
  isSelected: boolean;
  setSelectedCart: React.Dispatch<React.SetStateAction<ICart | undefined>>;
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
}
