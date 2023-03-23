import React, { useContext, useEffect, useState } from 'react';
import { CartsContext } from '../../../App';
import { ICart, IProduct } from '../../../types';
import DialogBase from '../DialogBase/DialogBase';
import { EditCartDialogProps, NewCartDialogProps } from '../types';
import styles from './EditCartDialog.module.css';

const EditCartDialog = ({ cartToEdit, setShowDialog }: EditCartDialogProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { discountedTotal, id, products, total, totalProducts, totalQuantity } = cartToEdit;
  console.log(discountedTotal, id, products, total, totalProducts, totalQuantity);

  const clickAwayHandler = () => {
    setShowDialog(false);
  };

  return (
    <DialogBase clickAwayHandler={clickAwayHandler} title="Edit Cart">
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <button className={styles.submitButton} type="submit" disabled={isLoading}>
          Submit Changes
        </button>
      </form>
    </DialogBase>
  );
};

export default EditCartDialog;
