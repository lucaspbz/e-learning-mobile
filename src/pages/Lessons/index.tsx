import React, { useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { Image } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { ILesson } from '../../components/CourseItem';
import LessonsHeader from '../../components/LessonsHeader';

import playIcon from '../../assets/playIcon.png';

import {
  Container,
  Content,
  ContentHeader,
  CoursesQuantity,
  ContentList,
  Category,
  CompletedBadge,
  CompletedBadgeText,
  LessonContainer,
  LessonDuration,
  LessonFooter,
  LessonName,
  LessonNumber,
  PlayIcon,
  LessonContent,
  LessonDurationContainer,
} from './styles';

const Lessons: React.FC = () => {
  const { navigate } = useNavigation();
  const handleNavigateToLessonDetail = useCallback(() => {
    navigate('LessonDetail');
  }, [navigate]);

  const data = [
    {
      id: '97454544-d278-43cb-b6e9-f4f4e66ae580',
      name: 'Matemática',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0G8nml_QHC9RHxbwtMYsH-cOdHpSl-yRHZQ&usqp=CAU',
      lessons: [
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
          completed: true,
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f553',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba356-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
      ],
    },
  ];

  const handleRenderItem = useCallback(item => {
    const lesson = item.item as ILesson;
    return (
      <LessonContainer>
        <PlayIcon
          completed={lesson.completed || false}
          onPress={handleNavigateToLessonDetail}
        >
          <Image source={playIcon} />
        </PlayIcon>

        <LessonContent>
          <LessonName>{lesson.name}</LessonName>

          <LessonFooter>
            <LessonNumber>Aula01</LessonNumber>

            <LessonDurationContainer>
              <Feather name="clock" size={12} color="#C4C4D1" />
              <LessonDuration>5min</LessonDuration>
            </LessonDurationContainer>

            {lesson.completed && (
              <CompletedBadge>
                <CompletedBadgeText>Completo!</CompletedBadgeText>
              </CompletedBadge>
            )}
          </LessonFooter>
        </LessonContent>
      </LessonContainer>
    );
  }, []);
  return (
    <Container>
      <LessonsHeader />

      <Content>
        <ContentHeader>
          <Category>Matemática</Category>
          <CoursesQuantity>16 aulas</CoursesQuantity>
        </ContentHeader>

        <ContentList
          data={data[0].lessons}
          renderItem={handleRenderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{
            paddingLeft: 24,
          }}
        />
      </Content>
    </Container>
  );
};

export default Lessons;
