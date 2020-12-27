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

function Home() {
  const [active, setActive] = useState({ active: false });

  const URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://cart-reactjs.netlify.app/';

  const handleClick = (event: any) => {
    console.log(event.target.name);
    console.log(event.target.value);

    if (event.target.value === 'true') {
      setActive({ active: false });
    }
    if (event.target.value === 'false') {
      setActive({ active: true });
    }
    event.target.value = active.active;
    setActive({ ...active, [event.target.name]: event.target.value });
  };
  return (
    <Container>
      <Header>
        <FilterWrapper>
          <IsFreeShippingButton
            value={`${active.active}`}
            name="shipping"
            onClick={handleClick}
          >
            Free Shipping
          </IsFreeShippingButton>
          <FilterButton
            value={`${active.active}`}
            name="xs"
            onClick={handleClick}
          >
            XS
          </FilterButton>
          <FilterButton
            value={`${active.active}`}
            name="s"
            onClick={handleClick}
          >
            S
          </FilterButton>
          <FilterButton
            value={`${active.active}`}
            name="m"
            onClick={handleClick}
          >
            M
          </FilterButton>
          <FilterButton
            value={`${active.active}`}
            name="l"
            onClick={handleClick}
          >
            L
          </FilterButton>
          <FilterButton
            value={`${active.active}`}
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
