import { createContext } from "react";
import { IProductsListContext } from "./types";

export const ProductsListContext = createContext<IProductsListContext>({} as IProductsListContext);
