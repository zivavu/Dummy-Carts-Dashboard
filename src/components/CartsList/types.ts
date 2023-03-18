import { ICart } from '../../types';

export interface CartsListProps {
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  selectedCart: ICart | undefined;
  setSelectedCart: React.Dispatch<React.SetStateAction<ICart | undefined>>;
}
