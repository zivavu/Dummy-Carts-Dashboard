import React, { useEffect, useState } from 'react';
import ClickAwayListener from './ClickAwayListener';
import styles from './NewCartDialog.module.css';
import ProductAutocompleteInput from './ProductAutocompleteInput';
import { NewCartDialogProps } from './types';

const NewCartDialog = ({ setShowModal, setCarts }: NewCartDialogProps) => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await fetch('https://dummyjson.com/products');
        const json = await data.json();
        setProductsList(json.products);
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
  return (
    <ClickAwayListener clickAwayHandler={clickAwayHandler}>
      <div className={styles.newCartDialog}>
        <header className={styles.newCartHeader}>
          <h1 style={{ textAlign: `center`, margin: `0` }}>New Cart</h1>
        </header>
        <form className={styles.newCartForm}>
          <ProductAutocompleteInput products={productsList} />
        </form>
      </div>
    </ClickAwayListener>
  );
};

export default NewCartDialog;
