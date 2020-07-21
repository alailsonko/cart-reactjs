import React, { useState } from 'react';

import { 
  Container,
  FacebookLogo,
  WrapperSearch,
  SearchIcon,
  SearchInput,
  WrapperSquareIcon,
  MenuIcon,
  WrapperCircleIcon,
  PlusIcon,
  MessengerIcon,
  NotificationsIcon,
  DownArrowIcon,
  ButtonSearch,
  ModalSearch,
  SearchArrowBack,
  ButtonArrowBack

} from './styles';

function Header() {
  const [modalSearch, setModalSearch] = useState(false)

  return (
    <Container>
        <div className="left-nav">
        <div>
                  <FacebookLogo />
          <WrapperSearch>
          {!modalSearch?
          (
          <ButtonSearch onClick={() => setModalSearch(true)}>
                <SearchIcon />
            </ButtonSearch>
      
          ) : (
          
          <ModalSearch>
             <ButtonArrowBack onClick={() => setModalSearch(false)}>
                 <SearchArrowBack />
             </ButtonArrowBack>
          
          
              <SearchInput />   
          </ModalSearch>
   
          )
             
          }
          </WrapperSearch>
        </div>

        <div className="middle-icons">
          <WrapperSquareIcon>
            <MenuIcon />
          </WrapperSquareIcon>
        </div>

        </div>

        <div>
           <WrapperCircleIcon>
              <PlusIcon />
           </WrapperCircleIcon>
           <WrapperCircleIcon>
              <MessengerIcon />
           </WrapperCircleIcon>           
           <WrapperCircleIcon>
              <NotificationsIcon />
           </WrapperCircleIcon>           
           <WrapperCircleIcon>
              <DownArrowIcon />
           </WrapperCircleIcon>
        </div>
    </Container>
  );
}

export default Header;