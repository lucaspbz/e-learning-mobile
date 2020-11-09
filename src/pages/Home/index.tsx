import React from 'react';
import { TouchableOpacity } from 'react-native';

import logoImg from '../../assets/e.learning.png';
import signOutImg from '../../assets/signOut.png';

import {
  Container,
  Content,
  Category,
  ContentHeader,
  ContentItems,
  ContentList,
  CoursesQuantity,
  Header,
  Logo,
  LogoContainer,
  LogoutButton,
  SearchContainer,
  SearchContainerIcon,
  SearchContainerInput,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
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
      </Header>

      <Content>
        <ContentHeader>
          <Category>Categorias</Category>
          <CoursesQuantity>43 cursos</CoursesQuantity>
        </ContentHeader>

        <ContentList
          data={[1, 2, 3, 5, 6, 7]}
          renderItem={_ => <ContentItems />}
          keyExtractor={item => String(item)}
          numColumns={2}
          contentContainerStyle={{
            alignItems: 'center',
          }}
        />
      </Content>
    </Container>
  );
};

export default Home;
