import { useEffect, useState } from "react";
import { ICart } from "../types";

const useGetAllCarts = () => {
  const [carts, setCarts] = useState<ICart[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  console.log(carts);

  useEffect(() => {
    const fetchCarts = async () => {
      setIsLoading(true);
      try {
        const data = await fetch(`https://dummyjson.com/carts`);
        const json = await data.json();
        setCarts(json.carts as ICart[]);
      } catch {
        setError(`Couldn't fetch carts`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCarts();
  }, []);

  return {
    carts,
    setCarts,
    error,
    isLoading,
  };
};

export default useGetAllCarts;
