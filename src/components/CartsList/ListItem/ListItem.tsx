import React, { useContext } from 'react';
import TrashCanSVG from '../../../assets/trash-can.svg';
import { ICart } from '../../../types';
import listStyles from '../CartsList.module.css';
import styles from './ListItem.module.css';
import { ListItemProps } from './types';

import { createPortal } from 'react-dom';
import { CartsContext } from '../../../App';
import EditSVG from '../../../assets/edit.svg';
import EditCartDialog from '../../CartManageDialogs/EditCartDialog/EditCartDialog';

const ListItem = ({ cart }: ListItemProps) => {
  const { carts, setCarts, selectedCart, setSelectedCart } = useContext(CartsContext);

  const [isDeleting, setIsDeleting] = React.useState(false);
  const [showEditDialog, setShowEditDialog] = React.useState(false);

  const handleCartSelect = () => {
    setSelectedCart(cart);
  };

  const handleCartDelete = async () => {
    if (carts.length < 2) return;
    setIsDeleting(true);

    //This is a local cart and will be deleted only loccaly
    if (cart.id > 20) {
      const newCarts = carts.filter((oldCart) => oldCart.id !== cart.id) as ICart[];
      setCarts(newCarts);
      setIsDeleting(false);
      return;
    }

    try {
      const data = await fetch(`https://dummyjson.com/carts/${cart.id}`, {
        method: 'DELETE',
      });
      const responseCart = await data.json();
      const newCarts = carts.filter((oldCart) => oldCart.id !== responseCart.id) as ICart[];
      setCarts(newCarts);

      if (selectedCart?.id === responseCart.id) {
        setSelectedCart(undefined);
      }
    } catch {
      console.error(console.error);
    } finally {
      setIsDeleting(false);
    }
  };

  const isSelected = selectedCart === cart;
  return (
    <>
      {showEditDialog &&
        createPortal(
          <EditCartDialog setShowDialog={setShowEditDialog} cartToEdit={cart} />,
          document.body
        )}
      <div className={styles.item} id={`cart-${cart.id}`}>
        <button
          className={`${isSelected && styles.active} ${styles.fullSizeSelectButton}`}
          onClick={handleCartSelect}>
          <span className={`${listStyles.firstColumn} ${listStyles.coulmn}`}>#{cart.id}</span>
          <span className={`${listStyles.secondColumn} ${listStyles.coulmn}`}> {cart.total}$</span>
          <span className={`${listStyles.thirdColumn} ${listStyles.coulmn}`}>
            {cart.discountedTotal}$
          </span>
        </button>
        <button
          onClick={() => setShowEditDialog(true)}
          className={`${isSelected && styles.active} ${listStyles.editButtonColumn} ${
            styles.editButton
          }`}
          disabled={isDeleting}>
          <img
            src={EditSVG}
            alt="Trash can"
            className={styles.editSVG}
            style={{ width: `24px` }}></img>
        </button>
        <button
          onClick={handleCartDelete}
          className={`${isSelected && styles.active} ${listStyles.deleteButtonColumn} ${
            styles.deleteButton
          }`}
          disabled={isDeleting}>
          <img
            src={TrashCanSVG}
            alt="Trash can"
            className={styles.deleteSVG}
            style={{ width: `19px` }}></img>
        </button>
      </div>
    </>
  );
};

export default ListItem;
