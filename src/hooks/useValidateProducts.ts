import React, { useContext, useEffect } from "react";
import { ProductsListContext } from "../contexts/ProductsListContext";
import { IProduct } from "../types";

const useValidateProducts = ({ productsToValidate }: { productsToValidate: IProduct[] }) => {
  const { productsList } = useContext(ProductsListContext);
  const [validated, setValidated] = React.useState<IProduct[]>([]);

  useEffect(() => {
    const validatedProducts = productsToValidate.filter((product) => {
      productsList.some((productList) => productList.title === product.title);
    });
    setValidated(validatedProducts);
  }, [productsToValidate]);
  return validated;
};
export default useValidateProducts;
