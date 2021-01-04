import { ProductType } from '../products/types';

export const ADD_PRODUCT_TO_CART = '@cart/addProductToCart';
export const UPDATE_CART = '@cart/updateCart';

interface addProductToCartOptions {
  type: typeof ADD_PRODUCT_TO_CART | typeof UPDATE_CART,
  payload: ProductType | ProductType[]
}

export interface CartState {
  cart: ProductType[] | any
}

export type CartActions = addProductToCartOptions
