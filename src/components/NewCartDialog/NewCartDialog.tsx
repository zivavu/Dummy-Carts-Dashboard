import React, { useEffect, useState } from 'react';
import { ICart, IProduct } from '../../types';
import ClickAwayListener from './ClickAwayListener/ClickAwayListener';
import styles from './NewCartDialog.module.css';
import ProductAutocompleteInput from './ProductAutocompleteInput';
import { NewCartDialogProps } from './types';

const NewCartDialog = ({ setShowModal, carts, setCarts }: NewCartDialogProps) => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [cartProducts, setCartsProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        setProductsList(json.products as IProduct[]);
      } catch {
        console.error(console.error);
      }
    };
    fetchProducts();
  }, []);

  const handleAddNewCart = async () => {
    try {
      const data = await fetch('https://dummyjson.com/carts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: 1,
          products: cartProducts.map((product) => {
            return { id: product.id, quantity: 1 };
          }),
        }),
      });
      const cart = await data.json();
      const newCart = { ...cart, id: carts[carts.length - 1].id + 1 } as ICart;
      setCarts([...carts, newCart as ICart]);
    } catch {
      console.error(console.error);
    }
  };

  const clickAwayHandler = () => {
    setShowModal(false);
  };

  console.log(cartProducts);
  const showEmptyInputBox = cartProducts.length < 7;
  return (
    <ClickAwayListener clickAwayHandler={clickAwayHandler}>
      <div className={styles.newCartDialog}>
        <header className={styles.newCartHeader}>
          <h1 style={{ textAlign: `center`, margin: `0` }}>New Cart</h1>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAddNewCart();
          }}
          className={styles.newCartForm}>
          {[...cartProducts].map((el, i) => (
            <ProductAutocompleteInput
              products={productsList}
              cartProducts={cartProducts}
              setCartsProducts={setCartsProducts}
              initValue={el.title}
              index={i}
            />
          ))}
          {showEmptyInputBox && (
            <ProductAutocompleteInput
              products={productsList}
              cartProducts={cartProducts}
              setCartsProducts={setCartsProducts}
              initValue=""
              index={cartProducts.length + 3}
            />
          )}
          <button type="submit">Add New Cart</button>
        </form>
      </div>
    </ClickAwayListener>
  );
};

export default NewCartDialog;
