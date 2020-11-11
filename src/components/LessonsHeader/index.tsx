import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/e.learning.png';

import { Container, Logo } from './styles';
import { useClass } from '../../hooks/class';

const LessonsHeader: React.FC = () => {
  const { goBack } = useNavigation();
  const { selectedCourse, setFavourite } = useClass();

  return (
    <Container>
      <TouchableOpacity onPress={goBack}>
        <Feather name="arrow-left" size={24} color="#FF6680" />
      </TouchableOpacity>

      <Logo source={logoImg} />

      <TouchableOpacity
        onPress={() => {
          setFavourite(selectedCourse.id);
        }}
      >
        <Feather name="heart" size={24} color="#FF6680" />
      </TouchableOpacity>
    </Container>
  );
};

export default LessonsHeader;
