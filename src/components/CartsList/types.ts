import { ICart } from '../../types';

export interface CartsListProps {
  carts: ICart[];
  setCarts: React.Dispatch<React.SetStateAction<ICart[]>>;
  selectedCart: ICart | undefined;
  setSelectedCart: React.Dispatch<React.SetStateAction<ICart | undefined>>;
}
export interface SortArrowsProps {
  field: 'id' | 'total' | 'discountedTotal';
  sortBy: ISortBy;
  setSortBy: React.Dispatch<React.SetStateAction<ISortBy>>;
}

export interface ISortBy {
  field: 'id' | 'total' | 'discountedTotal';
  dir: 'asc' | 'desc';
}
