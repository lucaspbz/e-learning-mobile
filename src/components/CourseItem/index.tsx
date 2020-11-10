import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ItemDescription,
  ItemName,
  ItemImg,
  DeleteIcon,
} from './styles';

export interface ICourse {
  id: string;
  name: string;
  image: string;
  lessons: ILesson[];
}

export interface ILesson {
  id: string;
  name: string;
  duration: number;
  description: string;
  video_id: string;
  completed?: boolean;
}

interface ICourseItemProps {
  course: ICourse;
  isDeletable: boolean;
}

const CourseItem: React.FC<ICourseItemProps> = ({ course, isDeletable }) => {
  const navigation = useNavigation();
  const handleNavigateToCourse = useCallback(() => {
    navigation.navigate('Lessons');
  }, [navigation]);
  return (
    <Container onPress={handleNavigateToCourse}>
      {isDeletable && (
        <DeleteIcon onPress={() => {}}>
          <Feather name="trash" size={20} color="#C4C4D1" />
        </DeleteIcon>
      )}
      <ItemImg source={{ uri: course.image, width: 64, height: 64 }} />

      <ItemName>{course.name}</ItemName>
      <ItemDescription>{course.lessons.length} aulas</ItemDescription>
    </Container>
  );
};

export default CourseItem;
