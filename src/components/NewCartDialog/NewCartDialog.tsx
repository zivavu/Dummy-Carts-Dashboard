import React, { useEffect, useState } from 'react';
import { IProduct } from '../../types';
import ClickAwayListener from './ClickAwayListener';
import styles from './NewCartDialog.module.css';
import ProductAutocompleteInput from './ProductAutocompleteInput';
import { NewCartDialogProps } from './types';

const NewCartDialog = ({ setShowModal, setCarts }: NewCartDialogProps) => {
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

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        fetch('https://dummyjson.com/carts/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            userId: 1,
            products: [
              {
                id: 1,
                quantity: 1,
              },
              {
                id: 50,
                quantity: 2,
              },
            ],
          }),
        }).then((res) => res.json());
      } catch {
        console.error(console.error);
      }
    };
    fetchCarts();
  }, []);

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
        <form className={styles.newCartForm}>
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
        </form>
      </div>
    </ClickAwayListener>
  );
};

export default NewCartDialog;
