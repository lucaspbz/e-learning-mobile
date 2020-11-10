import React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  SearchContainerInput,
  SearchContainerIcon,
  SearchContainer,
  LogoutButton,
  LogoContainer,
  Logo,
} from './styles';

import logoImg from '../../assets/e.learning.png';
import signOutImg from '../../assets/signOut.png';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo source={logoImg} />

        <TouchableOpacity onPress={() => {}}>
          <LogoutButton source={signOutImg} width={24} height={24} />
        </TouchableOpacity>
      </LogoContainer>

      <SearchContainer>
        <SearchContainerIcon name="search1" size={20} />
        <SearchContainerInput placeholder="Busque um curso" />
      </SearchContainer>
    </Container>
  );
};

export default Header;
