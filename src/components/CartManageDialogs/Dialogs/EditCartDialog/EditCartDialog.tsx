import React, { useContext, useEffect, useState } from 'react';
import { CartsContext } from '../../../../contexts/CartsContext';
import { ProductsListContext } from '../../../../contexts/ProductsListContext';
import { ICart, IProduct } from '../../../../types';
import DialogBase from '../../DialogBase/DialogBase';
import dialogStyles from '../../DialogBase/DialogBase.module.css';
import { EditCartDialogProps } from '../NewCartDialog/types';
import EditCartProductAutocomplete from '../ProductAutocompleteInputs/EditCartProduct/EditCartProduct';
import styles from './EditCartDialog.module.css';

const EditCartDialog = ({ cartToEdit, setShowDialog }: EditCartDialogProps) => {
  const [cartProducts, setCartsProducts] = useState<IProduct[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const { discountedTotal, id, products, total, totalProducts, totalQuantity } = cartToEdit;

  const clickAwayHandler = () => {
    setShowDialog(false);
  };

  return (
    <DialogBase clickAwayHandler={clickAwayHandler} title="Edit Cart">
      <form
        className={styles.editCartForm}
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        {products.map((product, i) => {
          return (
            <EditCartProductAutocomplete
              cartProducts={cartProducts}
              index={i}
              initValue={product.title}
              isLoading={isLoading}
              setCartsProducts={setCartsProducts}
            />
          );
        })}

        <button className={dialogStyles.submitButton} type="submit" disabled={isLoading}>
          Submit Changes
        </button>
      </form>
    </DialogBase>
  );
};

export default EditCartDialog;
