import React, { useContext, useEffect, useState } from 'react';
import { CartsContext } from '../../../../contexts/CartsContext';
import { ProductsListContext } from '../../../../contexts/ProductsListContext';
import { ICart, IProduct } from '../../../../types';
import DialogBase from '../../DialogBase/DialogBase';
import dialogStyles from '../../DialogBase/DialogBase.module.css';
import NewCartProductAutocomplete from '../ProductAutocompleteInputs/NewCartProduct/NewCartProduct';
import styles from './NewCartDialog.module.css';
import { NewCartDialogProps } from './types';

const NewCartDialog = ({ setShowDialog }: NewCartDialogProps) => {
  const { carts, setCarts, setSelectedCart } = useContext(CartsContext);

  const [cartProducts, setCartsProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAddNewCart = async () => {
    if (cartProducts.length === 0) return;
    setIsLoading(true);
    try {
      const data = await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: cartProducts.map((product) => {
            return { id: product.id, quantity: product.quantity };
          }),
        }),
      });
      const cart = await data.json();
      if (cart.length === 0) return;

      const newCart = { ...cart, id: carts[carts.length - 1].id + 1 } as ICart;
      setCarts((prevCarts) => [...prevCarts, newCart]);
      setSelectedCart(newCart);
    } catch {
      console.error(console.error);
    } finally {
      setIsLoading(false);
      setShowDialog(false);
    }
  };

  const clickAwayHandler = () => {
    setShowDialog(false);
  };

  const showEmptyInputBox = cartProducts.length < 5;
  return (
    <DialogBase clickAwayHandler={clickAwayHandler} title="New Cart">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddNewCart();
        }}
        className={styles.newCartForm}>
        {[...cartProducts].map((el, i) => (
          <NewCartProductAutocomplete
            key={el.id}
            cartProducts={cartProducts}
            setCartsProducts={setCartsProducts}
            initValue={el.title}
            index={i}
            isLoading={isLoading}
          />
        ))}
        {showEmptyInputBox && (
          <NewCartProductAutocomplete
            cartProducts={cartProducts}
            setCartsProducts={setCartsProducts}
            initValue=""
            index={cartProducts.length}
            isLoading={isLoading}
          />
        )}
        <button
          className={`${dialogStyles.submitButton} ${styles.submitButton}`}
          type="submit"
          disabled={isLoading || !cartProducts[0]}>
          Add New Cart
        </button>
      </form>
    </DialogBase>
  );
};

export default NewCartDialog;
