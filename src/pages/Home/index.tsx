import React, { useState } from 'react';
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
} from './styles';

const initialActiveState = {
  shipping: 'false',
  xs: 'false',
  s: 'false',
  m: 'false',
  l: 'false',
  xl: 'false',
};

function Home() {
  const [active, setActive] = useState(initialActiveState);

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

  return (
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
        <Product>
          <ImageProduct src={`${URL}static/img/4-t-shirt-male.jpeg`} />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
        <Product>
          <ImageProduct src={`${URL}static/img/4-t-shirt-male.jpeg`} />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
        <Product>
          <ImageProduct src={`${URL}static/img/4-t-shirt-male.jpeg`} />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
        <Product>
          <ImageProduct src={`${URL}static/img/4-t-shirt-male.jpeg`} />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
      </WrapperShelf>
    </Container>

  );
}

export default Home;
