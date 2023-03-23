import { ICart } from '../../../../types';

export interface NewCartDialogProps {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface EditCartDialogProps {
  setShowDialog: React.Dispatch<React.SetStateAction<boolean>>;
  cartToEdit: ICart;
}
