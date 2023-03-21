import React from 'react';
import TrashCanSVG from '../../assets/trash-can.svg';
import { IProduct } from '../../types';
import styles from './NewCartDialog.module.css';
import { ProductAutocompleteInputProps } from './types';
const ProductAutocompleteInput = ({
  products,
  cartProducts,
  setCartsProducts,
  initValue,
  index,
  isLoading,
}: ProductAutocompleteInputProps) => {
  const [product, setProduct] = React.useState<IProduct | null>(null);
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
    setProduct(match);
    setMatches([]);
    setInputValue('');
    setCartsProducts(reduceDuplicatesToSingleValue([...cartProducts, match]));
  };

  const reduceDuplicatesToSingleValue = (products: IProduct[]) => {
    const uniqueProducts: IProduct[] = [];
    products.forEach((product) => {
      if (!uniqueProducts.some((uniqueProduct) => uniqueProduct.id === product.id)) {
        uniqueProducts.push(product);
      }
    });
    return uniqueProducts;
  };

  const handleDeleteProduct = () => {
    setCartsProducts(cartProducts.filter((product) => product.id !== cartProducts[index].id));
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
