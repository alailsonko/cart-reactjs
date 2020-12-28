import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';
import { MdRemoveCircle } from 'react-icons/md';

interface Props {
  value: string
}

export const Container = styled.div`

`;

export const FilterButton = styled.button`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    outline: none;
    margin: 0 2px;
    border: 1px solid var(--color-gray-lighter);
    background-color: ${(props: Props) => (props.value === 'false' ? 'var(--color-gray-lighter)' : 'var(--color-gray-darker)')};

`;
export const IsFreeShippingButton = styled.button`
  outline: none;
  border-radius: 5px;
  height: 25px;
  border: 1px solid var(--color-gray-lighter);
  background-color: ${(props: Props) => (props.value === 'false' ? 'var(--color-gray-lighter)' : 'var(--color-gray-darker)')};
`;
export const Header = styled.div`
   background-color: var(--color-purple-lighter);
   height: 15vh;
   display: flex;
   justify-content: center;
   position: relative;
`;
export const FilterWrapper = styled.div`
     bottom: 0;
     position: absolute;
     display: flex;
     align-items: center;
     justify-content: space-between;
`;
export const WrapperShelf = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 40px;
`;
export const Product = styled.div`
  width: 170px;
  border-radius: 10px;
  border: 1px solid var(--color-purple-lighter);
  margin: 10px 10px;
  background-color: var(--color-gray-darker);
`;
export const TitleProduct = styled.h2`
  font-size: 14px;
  font-weight: normal;
  margin: 0 5px;
  margin-top: 10px;
`;
export const ImageProduct = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin-bottom: 0;
`;
export const Price = styled.h2`
  font-size: 18px;
  float: right;
  margin-right: 5px;
`;

export const AddToCartIcon = styled(FaCartPlus)`
  background-color: white;
  height: 28px;
  width: 28px;
  position: absolute;
  z-index: 2;
  bottom: 4px;
  right: 0;
`;

export const RemoveFromCartIcon = styled(MdRemoveCircle)`

`;

export const WrapperProductImage = styled.div`
background-color: green;
position: relative;
`;
