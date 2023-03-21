import { ICart } from '../../types';

export interface SiteHeadingProps {
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
}
