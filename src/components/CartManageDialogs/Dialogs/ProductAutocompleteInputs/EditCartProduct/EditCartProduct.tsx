import React, { useContext, useEffect, useRef } from 'react';
import { ProductsListContext } from '../../../../../contexts/ProductsListContext';
import { IProduct } from '../../../../../types';
import { ProductAutocompleteInputProps } from '../types';
import TrashCanSVG from './../../../../../assets/trash-can.svg';
import styles from './../ProductAutocomplete.module.css';

const EditCartProductAutocomplete = ({
  cartProducts,
  setCartsProducts,
  initProduct,
  index,
  isLoading,
}: ProductAutocompleteInputProps) => {
  const { productsList } = useContext(ProductsListContext);

  const [inputValue, setInputValue] = React.useState(initProduct?.title);
  const [matches, setMatches] = React.useState<IProduct[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const isProductValid = !!initProduct?.price;

  const emptyCurrentProduct = (inputValue: string) => {
    if (isProductValid) {
      setCartsProducts(
        cartProducts.map((product, i) => {
          return i === index
            ? ({
                id: Math.random(),
                title: inputValue,
                price: 0,
                quantity: initProduct.quantity,
                discountedPrice: 0,
                discountPercentage: 0,
                total: 0,
              } as IProduct)
            : product;
        })
      );
    }
  };

  const handleInputChange = (e: any) => {
    const inputValue = e.target.value as string;
    setInputValue(inputValue);
    emptyCurrentProduct(e.target.value);
    if (inputValue.length === 0) {
      setMatches([]);
      return;
    }
    // Maches by title, sorts by index of the letters that were typed
    const newMatches = productsList
      .filter((product) => product.title.toLowerCase().includes(inputValue.toLowerCase()))
      .sort((a, b) => {
        if (
          a.title.toLowerCase().indexOf(inputValue.toLowerCase()) <
          b.title.toLowerCase().indexOf(inputValue.toLowerCase())
        ) {
          return -1;
        }
        if (
          a.title.toLowerCase().indexOf(inputValue.toLowerCase()) >
          b.title.toLowerCase().indexOf(inputValue.toLowerCase())
        ) {
          return 1;
        }
        return 0;
      });
    setMatches(newMatches);
  };

  useEffect(() => {
    //set focus back to input
    inputRef.current?.focus();
  }, [inputValue]);

  const handleSetProduct = (match: IProduct) => {
    setMatches([]);
    setInputValue(match.title);
    const newProduct = { ...match, quantity: 1 } as IProduct;
    const newCartsProducts = cartProducts.map((product, i) => (i === index ? newProduct : product));
    setCartsProducts(reduceDuplicatesToSingleValue([...newCartsProducts]));
  };

  const reduceDuplicatesToSingleValue = (products: IProduct[]) => {
    const uniqueProducts: IProduct[] = [];
    products.forEach((product) => {
      const existingProduct = uniqueProducts.find((p) => p.id === product.id);
      if (existingProduct && existingProduct.quantity >= 99) return;
      if (existingProduct) {
        existingProduct.quantity += product.quantity;
      } else {
        uniqueProducts.push(product);
      }
    });
    return uniqueProducts;
  };

  const handleDeleteProduct = () => {
    setCartsProducts(cartProducts.filter((product, i) => i !== index));
  };

  const handleProductsQuantityChange = (e: any) => {
    const productToEdit = cartProducts[index];
    if (e.target.value > (productToEdit?.stock || 99)) e.target.value = productToEdit?.stock || 99;
    setCartsProducts(
      cartProducts.map((product, i) =>
        product.id === productToEdit.id ? { ...product, quantity: Number(e.target.value) } : product
      )
    );
  };

  return (
    <div className={styles.productInputContainer}>
      <label style={{ textAlign: `left`, width: `80%` }}>Product #{index + 1}</label>
      <div style={{ display: `flex`, alignItems: `center` }}>
        <div className={styles.mainInputContainer}>
          <input
            className={`${styles.productInput} ${styles.editProductInput} ${
              isProductValid && styles.validProductInput
            }`}
            ref={inputRef}
            value={inputValue}
            disabled={isLoading}
            onChange={handleInputChange}></input>
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
        <input
          className={styles.quantityInput}
          type="number"
          min={0}
          max={cartProducts[index].stock || 99}
          onChange={handleProductsQuantityChange}
          value={cartProducts[index]?.quantity.toString()}
          disabled={isLoading}></input>

        {!isLoading && cartProducts[index] ? (
          <button className={styles.productDeleteButton} onClick={handleDeleteProduct}>
            <img
              src={TrashCanSVG}
              alt="Trash can"
              className={styles.deleteSVG}
              style={{ width: `18px` }}></img>
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default EditCartProductAutocomplete;
