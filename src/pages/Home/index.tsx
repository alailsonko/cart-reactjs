import React from 'react';
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

function Home() {
  const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://cart-reactjs.netlify.app/';

  return (
    <Container>
      <Header>
        <FilterWrapper>
          <IsFreeShippingButton>
            no
          </IsFreeShippingButton>
          <FilterButton>
            XS
          </FilterButton>
          <FilterButton>
            S
          </FilterButton>
          <FilterButton>
            M
          </FilterButton>
          <FilterButton>
            L
          </FilterButton>
          <FilterButton>
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
