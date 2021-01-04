import { combineReducers } from 'redux';
import productsReducer from './products/reducers';
import cartReducer from './cart/reducers';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export default rootReducer;
