import React, { useState, useEffect } from 'react';
// redux logic
import { connect, ConnectedProps, useDispatch } from 'react-redux';
import { getProducts } from '../../store/products/actions';
import { ProductsState, ProductType } from '../../store/products/types';
// components logic
import Cart from '../../components/Cart';
// styling logic
import {
  Container,
  Header,
  FilterWrapper,
  FilterButton,
  IsFreeShippingButton,
  WrapperShelf,
  Product,
  ImageProduct,
  TitleProduct,
  Price,
  AddToCartIcon,
  WrapperProductImage,
  AddIconContainer,
} from './styles';

const initialActiveState = {
  shipping: 'false',
  xs: 'false',
  s: 'false',
  m: 'false',
  l: 'false',
  xl: 'false',
};

interface RootState {
  products: ProductsState
}

const mapState = (state: RootState) => ({
  products: state.products,
});

const mapDispatch = {
  getAllProducts: getProducts,
};

const connector = connect(mapState, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsFromRedux

function Home(props: Props) {
  const [active, setActive] = useState(initialActiveState);
  const dispatch = useDispatch();
  const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://cart-reactjs.netlify.app/';

  const handleClick = (event: any) => {
    if (event.target.value === 'false') {
      event.target.value = 'true';
      setActive({ ...active, [event.target.name]: event.target.value });
      return;
    }
    event.target.value = 'false';
    setActive({ ...active, [event.target.name]: event.target.value });
  };

  const {
    l, m, s, shipping, xl, xs,
  } = active;
  const { products, getAllProducts } = props;
  useEffect(() => {
    dispatch(getAllProducts);
  }, [getAllProducts]);

  console.log('from home', products);

  return (
    <>
      <Cart />
      <Container>
        <Header>
          <FilterWrapper>
            <IsFreeShippingButton
              value={shipping}
              name="shipping"
              onClick={handleClick}
            >
              Free Shipping
            </IsFreeShippingButton>
            <FilterButton
              value={xs}
              name="xs"
              onClick={handleClick}
            >
              XS
            </FilterButton>
            <FilterButton
              value={s}
              name="s"
              onClick={handleClick}
            >
              S
            </FilterButton>
            <FilterButton
              value={m}
              name="m"
              onClick={handleClick}
            >
              M
            </FilterButton>
            <FilterButton
              value={l}
              name="l"
              onClick={handleClick}
            >
              L
            </FilterButton>
            <FilterButton
              value={xl}
              name="xl"
              onClick={handleClick}
            >
              XL
            </FilterButton>
          </FilterWrapper>
        </Header>
        <WrapperShelf>
          {products.products.map((item: ProductType) => (
            <Product>
              <WrapperProductImage>
                <ImageProduct src={`${URL}${item.image}`} />
                <AddIconContainer>
                  <AddToCartIcon />
                </AddIconContainer>
              </WrapperProductImage>
              <TitleProduct>
                {item.title}
              </TitleProduct>
              <Price>
                {item.price}
              </Price>
            </Product>
          ))}
        </WrapperShelf>
      </Container>
    </>

  );
}

export default connector(Home);
