import { ICart } from '../../types';

export interface CartsListProps {
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
}
