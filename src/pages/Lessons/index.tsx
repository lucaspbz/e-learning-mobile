import React, { useCallback, useMemo } from 'react';
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
import { useClass } from '../../hooks/class';

const Lessons: React.FC = () => {
  const { course } = useClass();
  const { navigate } = useNavigation();
  const handleNavigateToLessonDetail = useCallback(() => {
    navigate('LessonDetail');
  }, [navigate]);

  const data = useMemo(() => {
    return course.lessons;
  }, [course.lessons]);

  const selectedClass = useMemo(() => {
    return course;
  }, [course]);

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
          <Category>{selectedClass.name}</Category>
          <CoursesQuantity>{data.length} aulas</CoursesQuantity>
        </ContentHeader>

        <ContentList
          data={data}
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
