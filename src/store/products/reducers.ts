import {
  GET_PRODUCTS,
  ProductsActions,
  ProductsState,
} from './types';

const initialState: ProductsState = {
  products: [],
};

export default function productsReducer(
  state = initialState,
  action: ProductsActions,
): ProductsState {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        products: action.payload,
      };
    default:
      return state;
  }
}
