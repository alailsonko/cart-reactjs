import {
  ADD_PRODUCT_TO_CART,
  CartActions,
  CartState,
} from './types';

const initialState: CartState = {
  cart: [],
};

export default function cartReducer(
  state = initialState,
  action: CartActions,
): CartState {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return {
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}
