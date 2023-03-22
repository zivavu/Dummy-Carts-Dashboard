import React from 'react';
import TrashCanSVG from '../../../assets/trash-can.svg';
import { IProduct } from '../../../types';
import { ProductAutocompleteInputProps } from '../types';
import styles from './ProductAutocompleteInput.module.css';

const ProductAutocompleteInput = ({
  products,
  cartProducts,
  setCartsProducts,
  initValue,
  index,
  isLoading,
}: ProductAutocompleteInputProps) => {
  const [inputValue, setInputValue] = React.useState(initValue);
  const [matches, setMatches] = React.useState<IProduct[]>([]);

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
    const newMatches = products
      .filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase()))
      .sort((a, b) => {
        if (
          a.title.toLowerCase().indexOf(e.target.value.toLowerCase()) <
          b.title.toLowerCase().indexOf(e.target.value.toLowerCase())
        ) {
          return -1;
        }
        if (
          a.title.toLowerCase().indexOf(e.target.value.toLowerCase()) >
          b.title.toLowerCase().indexOf(e.target.value.toLowerCase())
        ) {
          return 1;
        }
        return 0;
      });
    setMatches(newMatches);
  };

  const handleSetProduct = (match: IProduct) => {
    setMatches([]);
    setInputValue('');
    const newProduct = { ...match, quantity: 1 };
    setCartsProducts(reduceDuplicatesToSingleValue([...cartProducts, newProduct]));
  };

  const reduceDuplicatesToSingleValue = (products: IProduct[]) => {
    const uniqueProducts: IProduct[] = [];
    products.forEach((product) => {
      const existingProduct = uniqueProducts.find((p) => p.id === product.id);
      if (existingProduct && existingProduct.quantity >= 99) return;
      if (existingProduct) {
        console.log(existingProduct.quantity);
        existingProduct.quantity += product.quantity;
      } else {
        uniqueProducts.push(product);
      }
    });
    return uniqueProducts;
  };

  const handleDeleteProduct = () => {
    setCartsProducts(cartProducts.filter((product) => product.id !== cartProducts[index].id));
  };

  const handleProductsQuantityChange = (e: any) => {
    if (e.target.value > 100) e.target.value = 99;
    setCartsProducts(
      cartProducts.map((product, i) =>
        product.id === cartProducts[index].id
          ? { ...product, quantity: Number(e.target.value) }
          : product
      )
    );
  };

  return (
    <div className={styles.productInputContainer}>
      <label style={{ textAlign: `left`, width: `80%` }}>Product #{index + 1}</label>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <input
          className={styles.productInput}
          value={inputValue}
          disabled={!!cartProducts[index] || isLoading}
          onChange={handleInputChange}></input>
        {cartProducts[index] ? (
          <input
            className={styles.quantityInput}
            type="number"
            min={0}
            max={100}
            onChange={handleProductsQuantityChange}
            value={cartProducts[index]?.quantity.toString()}
            disabled={isLoading}></input>
        ) : null}
        {!isLoading && cartProducts[index] ? (
          <button onClick={handleDeleteProduct} className={styles.productDeleteButton}>
            <img
              src={TrashCanSVG}
              alt="basket"
              className={styles.deleteSVG}
              style={{ width: `16px` }}></img>
          </button>
        ) : null}
      </div>
      {matches[0] ? (
        <div className={styles.autocompleteDisplay}>
          {matches.slice(0, 5).map((match) => (
            <div
              key={match.id}
              className={styles.autocompleteOption}
              onClick={() => handleSetProduct(match)}>
              {match.title}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default ProductAutocompleteInput;
