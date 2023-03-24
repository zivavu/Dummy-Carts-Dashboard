import { useState } from "react";
import styles from "./App.module.css";
import CartProductsChart from "./components/CartProductsChart/CartProductsChart";
import CartsList from "./components/CartsList/CartsList";
import SiteHeading from "./components/SiteHeading/SiteHeading";
import { CartsContext } from "./contexts/CartsContext";
import { ProductsListContext } from "./contexts/ProductsListContext";
import useGetAllCarts from "./hooks/useGetAllCarts";
import useGetAllProducts from "./hooks/useGetAllProducts";
import { ICart } from "./types";

function App() {
  const [selectedCart, setSelectedCart] = useState<ICart>();

  const { carts, setCarts } = useGetAllCarts();
  const { productsList, isLoading: areProductsLoading } = useGetAllProducts();

  return (
    <CartsContext.Provider
      value={{
        carts,
        setCarts,
        selectedCart,
        setSelectedCart,
      }}
    >
      <ProductsListContext.Provider
        value={{
          productsList,
          areProductsLoading,
        }}
      >
        <div className={styles.aplicationWrapper}>
          <SiteHeading />
          <main className={styles.dashboardWrapper}>
            <CartsList />
            <CartProductsChart selectedCart={selectedCart} />
          </main>
        </div>
      </ProductsListContext.Provider>
    </CartsContext.Provider>
  );
}

export default App;
