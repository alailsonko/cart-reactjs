import { ProductType } from '../products/types';
import { CartActions, ADD_PRODUCT_TO_CART } from './types';

// TODO action for add product to cart
export const addProductToCart = (product: ProductType): any => {
  console.log(product);

  return (dispatch: any, getState: any) => {
    dispatch(addProduct(product));
    console.log(getState().cart.cart);
  };
};

const addProduct = (product: ProductType): CartActions => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const update = () => {
  console.log('hello');
};

// TODO update cart
// TODO set quantity and total price
// TODO persist data
