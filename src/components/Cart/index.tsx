import React, { useState } from 'react';

import {
  Container,
  WrapperCloseOpenIcon,
  CloseCartIcon,
  OpenCartIcon,
} from './styles';

const Cart: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpenClick = () => {
    if (isOpen === false) {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  };

  return (
    <Container isOpen={`${isOpen}`}>
      <WrapperCloseOpenIcon onClick={handleIsOpenClick}>
        {isOpen ? <CloseCartIcon /> : <OpenCartIcon /> }
      </WrapperCloseOpenIcon>
      <h1>Cart</h1>
    </Container>
  );
};

export default Cart;
