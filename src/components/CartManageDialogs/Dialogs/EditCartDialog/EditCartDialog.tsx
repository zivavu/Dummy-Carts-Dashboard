import React, { useContext, useEffect, useState } from 'react';
import { CartsContext } from '../../../../contexts/CartsContext';
import { ICart, IProduct } from '../../../../types';
import DialogBase from '../../DialogBase/DialogBase';
import dialogStyles from '../../DialogBase/DialogBase.module.css';
import { EditCartDialogProps } from '../NewCartDialog/types';
import EditCartProductAutocomplete from '../ProductAutocompleteInputs/EditCartProduct/EditCartProduct';
import NewCartProductAutocomplete from '../ProductAutocompleteInputs/NewCartProduct/NewCartProduct';

const EditCartDialog = ({ cartToEdit, setShowDialog }: EditCartDialogProps) => {
  const { carts, setCarts, setSelectedCart } = useContext(CartsContext);

  const [cartProducts, setCartsProducts] = useState<IProduct[]>(cartToEdit.products);

  const [isLoading, setIsLoading] = useState(false);

  const clickAwayHandler = () => {
    setShowDialog(false);
  };

  const isProductValid = (product: IProduct) => {
    const { id, price, quantity, title } = product;
    return !!(id && price && quantity && title) ? true : false;
  };

  const handleCartUpdate = async () => {
    if (cartProducts.length === 0) return;
    setIsLoading(true);
    try {
      const validProducts = [...cartProducts.filter((product) => isProductValid(product))];
      const productsToRequest = validProducts.map((product) => ({
        id: product.id,
        quantity: product.quantity || 1,
      }));
      setCartsProducts(validProducts);
      console.log(validProducts);
      const data = await fetch(`https://dummyjson.com/carts/${cartToEdit.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          products: productsToRequest,
        }),
      });
      const cartResponse = (await data.json()) as ICart;
      if (!cartResponse?.products) return;

      const newCarts = carts.map((cart) => (cart.id === cartToEdit.id ? cartResponse : cart));

      setCarts(newCarts);
      setSelectedCart(cartResponse);
    } catch {
      console.error(console.error);
    } finally {
      setIsLoading(false);
      setShowDialog(false);
    }
  };

  const showEmptyInputBox = cartProducts.length < 5 && !isLoading;

  return (
    <DialogBase clickAwayHandler={clickAwayHandler} title={`Edit Cart #${cartToEdit.id}`}>
      <form
        className={dialogStyles.dialogForm}
        onSubmit={(e) => {
          e.preventDefault();
          handleCartUpdate();
        }}>
        {cartProducts.map((product, i) => {
          return (
            <EditCartProductAutocomplete
              key={product.id}
              cartProducts={cartProducts}
              setCartsProducts={setCartsProducts}
              index={i}
              initProduct={product}
              isLoading={isLoading}
            />
          );
        })}
        {showEmptyInputBox && (
          <NewCartProductAutocomplete
            cartProducts={cartProducts}
            setCartsProducts={setCartsProducts}
            initProduct={null}
            index={cartProducts.length}
            isLoading={isLoading}
          />
        )}

        <button className={dialogStyles.submitButton} type="submit" disabled={isLoading}>
          Submit Changes
        </button>
      </form>
    </DialogBase>
  );
};

export default EditCartDialog;
