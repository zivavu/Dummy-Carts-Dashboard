import { ICart } from '../../types';

export interface CartsListProps {}
export interface SortButtonProps {
  field: 'id' | 'total' | 'discountedTotal';
  sortBy: ISortBy;
  setSortBy: React.Dispatch<React.SetStateAction<ISortBy>>;
}

export interface ISortBy {
  field: 'id' | 'total' | 'discountedTotal';
  dir: 'asc' | 'desc';
}
