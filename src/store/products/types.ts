export const GET_PRODUCTS = '@Products/GET_PRODUCTS';

export interface ProductType {
  id: string,
  sku: string,
  title: string,
  description: string,
  availableSizes: string[],
  price: number,
  isFreeShipping: boolean | string,
  quantity: number,
  category: string,
  image: string,
}

export interface ProductsState {
  products: ProductType[]
}

interface GetProductsActions {
  type: typeof GET_PRODUCTS,
  payload: ProductType[]
}

export type ProductsActions = GetProductsActions
