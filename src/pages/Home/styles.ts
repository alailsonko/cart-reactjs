import styled from 'styled-components';

export const Container = styled.div`

`;

interface Props {
  value: string;
}

export const FilterButton = styled.button`
    border-radius: 50%;
    height: 50px;
    width: 50px;
    outline: none;
    background-color: ${(props: Props) => (props.value === 'true' ? 'blue' : 'red')};
`;
export const IsFreeShippingButton = styled.button`
  outline: none;
  background-color: ${(props: Props) => (props.value === 'true' ? 'blue' : 'red')};
`;
export const Header = styled.div`
   background-color: var(--color-purple-lighter);
   height: 15vh;
   display: flex;
   justify-content: center;
   position: relative;
`;
export const FilterWrapper = styled.div`
     background-color: red;
     bottom: 0;
     position: absolute;
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
  margin: 10px 10px;
  background-color: red;
`;
export const TitleProduct = styled.h2`
  font-size: 14px;
  margin: 0 5px;
`;
export const ImageProduct = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;
export const Price = styled.h2`
  font-size: 18px;
  float: right;
  margin-right: 5px;
`;
