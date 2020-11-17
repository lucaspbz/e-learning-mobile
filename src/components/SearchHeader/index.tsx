import React, { useCallback, useEffect, useState } from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
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
import useDebouce from '../../hooks/useDebouce';

interface ISearchHeaderProps {
  onChange(searchParam: string): void;
}

const SearchHeader: React.FC<ISearchHeaderProps> = ({ onChange }) => {
  const [searchValue, setSearchValue] = useState('');
  const { navigate } = useNavigation();

  const debouncedSearchValue = useDebouce(searchValue, 500);

  const handleChangeInput = useCallback((text: string) => {
    setSearchValue(text);
  }, []);

  useEffect(() => {
    onChange(debouncedSearchValue);
  }, [debouncedSearchValue, onChange]);

  return (
    <Container>
      <LogoContainer>
        <Logo source={logoImg} />

        <TouchableOpacity
          onPress={() => {
            navigate('Login');
          }}
        >
          <LogoutButton source={signOutImg} width={24} height={24} />
        </TouchableOpacity>
      </LogoContainer>

      <SearchContainer>
        <SearchContainerIcon name="search1" size={20} />
        <SearchContainerInput
          placeholder="Busque um curso"
          onChangeText={handleChangeInput}
        />
      </SearchContainer>
    </Container>
  );
};

export default SearchHeader;
