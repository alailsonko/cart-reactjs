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
          <ImageProduct src="http://localhost:3000/static/img/4-t-shirt-male.jpeg" />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
        <Product>
          <ImageProduct src="http://localhost:3000/static/img/4-t-shirt-male.jpeg" />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
        <Product>
          <ImageProduct src="http://localhost:3000/static/img/4-t-shirt-male.jpeg" />
          <TitleProduct>
            some title for the product
          </TitleProduct>
          <Price>
            R$ 99.00
          </Price>

        </Product>
        <Product>
          <ImageProduct src="http://localhost:3000/static/img/4-t-shirt-male.jpeg" />
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
