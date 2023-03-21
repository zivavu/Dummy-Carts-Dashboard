import React from 'react';
import { IProduct } from '../../types';
import styles from './NewCartDialog.module.css';
import { ProductAutocompleteInputProps } from './types';

const ProductAutocompleteInput = ({
  products,
  cartProducts,
  setCartsProducts,
  initValue,
  index,
}: ProductAutocompleteInputProps) => {
  const [product, setProduct] = React.useState<IProduct | null>(null);
  const [inputValue, setInputValue] = React.useState(initValue);
  const [matches, setMatches] = React.useState<IProduct[]>([]);

  const handleChange = (e: any) => {
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
    setCartsProducts([...filterEmptyProducts(), match]);
  };

  const filterEmptyProducts = () => {
    return cartProducts.filter((product) => product?.title !== '');
  };

  return (
    <div className={styles.productInputContainer}>
      <label style={{ textAlign: `left`, width: `80%` }}>Product #{index + 1}</label>
      <input className={styles.productInput} value={inputValue} onChange={handleChange}></input>
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
    </div>
  );
};

export default ProductAutocompleteInput;
