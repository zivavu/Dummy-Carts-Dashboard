import { createContext } from 'react';
import { ICartsContext } from './types';

export const CartsContext = createContext<ICartsContext>({} as ICartsContext);
