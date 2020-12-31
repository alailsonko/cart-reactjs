import { combineReducers } from 'redux';
import productsReducer from './products/reducers';

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
