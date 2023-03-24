import React, { useEffect, useState } from "react";
import { IProduct } from "../types";

const useGetAllProducts = () => {
  const [productsList, setProductsList] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(`https://dummyjson.com/products`);
        const json = await data.json();
        setProductsList(json.products as IProduct[]);
      } catch {
        setError(`Error fetching products`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return {
    productsList,
    error,
    setError,
    isLoading,
  };
};

export default useGetAllProducts;
