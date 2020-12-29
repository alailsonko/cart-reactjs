import styled from 'styled-components';
import { BiArrowFromRight, BiArrowFromLeft } from 'react-icons/bi';

interface Props {
  isOpen: string;
}

export const Container = styled.div`
  position: absolute;
  position: fixed;
  height: 100vh;
  width: 86vmin;   
  z-index: 9999;
  background-color: red;
  right: ${(props: Props) => (props.isOpen === 'false' ? '0' : '-86vw')};
  @media only screen and (min-width: 680px) {
    width: 350px;
    right: ${(props: Props) => (props.isOpen === 'false' ? '0' : '-350px')};
  }
`;

export const OpenCartIcon = styled(BiArrowFromRight)`
  height: 28px;
  width: 28px;
`;
export const CloseCartIcon = styled(BiArrowFromLeft)`
  height: 28px;
  width: 28px;
`;
export const WrapperCloseOpenIcon = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -40px;
  top: 20px;
  position: absolute;
`;

export const Card = styled.div`
`;
