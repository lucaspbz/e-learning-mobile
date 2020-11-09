import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import backgroundImg from '../../assets/backgroundImg.png';
import personImg from '../../assets/personImage.png';

import {
  Container,
  BackgroundImg,
  PersonImg,
  Subtitle,
  Title,
  Content,
  Button,
} from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const handleLogin = useCallback(() => {
    navigation.navigate('TabNavigation');
  }, [navigation]);

  return (
    <Container>
      <BackgroundImg source={backgroundImg} />

      <PersonImg source={personImg} />

      <Content>
        <Title>Aprenda da melhor forma</Title>
        <Subtitle>
          Entre na plataforma e acesse cursos de diversas áreas de conhecimento.
        </Subtitle>
      </Content>

      <Button onPress={handleLogin}>Começar os estudos</Button>
    </Container>
  );
};

export default Login;
