import { ICart } from '../../types';

export interface SiteHeadingProps {
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
}
