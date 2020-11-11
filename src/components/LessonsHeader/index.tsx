import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/e.learning.png';

import { Container, Logo } from './styles';
import { useClass } from '../../hooks/class';

const LessonsHeader: React.FC = () => {
  const { goBack } = useNavigation();
  const { selectedCourse, setFavourite, isFavourite } = useClass();

  const heartIcon = useMemo(() => {
    return isFavourite(selectedCourse.id) ? 'heart' : 'hearto';
  }, [isFavourite, selectedCourse.id]);

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
        <AntDesign name={heartIcon} size={24} color="#FF6680" />
      </TouchableOpacity>
    </Container>
  );
};

export default LessonsHeader;
