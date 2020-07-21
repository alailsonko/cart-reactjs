import styled, { css } from 'styled-components';

import {
  FacebookCircle,
  Messenger,
  Facebookgaming,
  Search,
  Home,
  Tv,
  Store,
  UserGroup,
  Menu,
  Plus,
  DownArrow,
  ArrowBack,
  Notifications
} from '../../styles/Icons'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
 
  background: rgba(0, 0, 0, 0.8);;
   
   div {
     display: flex;
   }
`;

export const FacebookLogo  = styled(FacebookCircle)`
   width: 50px;
   height: 50px;
   border-radius: 50%;
   fill: blue;
`
export const WrapperSearch  = styled.div`
   display: flex;
   align-items: center;
   
   cursor: pointer;
`
export const ButtonSearch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    width: 44px;
    height: 44px;
    border-radius: 50%;
`
export const ButtonArrowBack = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    width: 44px;
    height: 44px;
    border-radius: 50%;
`
export const SearchArrowBack = styled(ArrowBack)`
    height: 39px;
    width: 39px;
    border-radius: 50%;
    
    fill: blue;
`

export const SearchIcon  = styled(Search)`
    height: 39px;
    width: 39px;
    border-radius: 50%;
    
    fill: red;
`
export const ModalSearch = styled.div`
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 200px;
  height: 50px;
  background: red;
  left: 0;
  top: 0;
`

export const SearchInput  = styled.input`
     width: 150px;
     height: 30px;
     border-radius: 25%;
    
`

//middle side icons

const middleICON = css`
    height: 39px;
    width: 39px;
    border-radius: 50%;
    fill: white;
`
export const WrapperSquareIcon  = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 25%;

   :hover {
     background: rgba(0, 0, 0, 0.6);
   }
`
export const MenuIcon  = styled(Menu)`
        ${middleICON}
`
// left side icons

const leftICON = css`
    height: 39px;
    width: 39px;
    border-radius: 50%;  
    fill: white;

`
   

export const WrapperCircleIcon  = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;

   height: 50px;
   width: 50px;
   border-radius: 50%;
   :hover {
     background: rgba(0, 0, 0, 0.6)
   }
`
export const PlusIcon  = styled(Plus)`
    ${leftICON}
`
export const MessengerIcon  = styled(Messenger)`
    ${leftICON}

`
export const NotificationsIcon  = styled(Notifications)`
    ${leftICON}

`
export const DownArrowIcon = styled(DownArrow)`
    ${leftICON}

`