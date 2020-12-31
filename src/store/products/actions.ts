import Data from '../../api/api';
import { ProductType, GET_PRODUCTS, ProductsActions } from './types';

// TODO action for get all products
export function getProducts(): ProductsActions {
  console.log(Data.products);
  return {
    type: GET_PRODUCTS,
    payload: Data.products as ProductType[],
  };
}

// TODO save products in localstorage
export const hello = (): void => {
  console.log('hello');
};
