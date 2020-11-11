import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Alert, ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import YoutubePlayer, { getYoutubeMeta } from 'react-native-youtube-iframe';

import LessonsHeader from '../../components/LessonsHeader';

import {
  Container,
  VideoContainer,
  LessonNumber,
  LessonDuration,
  LessonName,
  Content,
  DetailsContainer,
  Footer,
  LessonDescription,
  NextLessonButton,
  NextLessonButtonText,
  PreviousLessonButton,
  PreviousLessonButtonText,
} from './styles';
import { useClass } from '../../hooks/class';
import secondsToMinutes from '../../util/secondsToMinutes';

interface IParams {
  lessonNumber: number;
}

const LessonDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [videoHeight, setVideoHeight] = useState(300);
  const [lessonIndex, setLessonIndex] = useState(0);

  const { params } = useRoute();
  const { selectedCourse: course, addCompletedLesson } = useClass();

  useEffect(() => {
    const { lessonNumber } = params as IParams;
    setLessonIndex(lessonNumber);
  }, [params]);

  const selectedLesson = useMemo(() => {
    return {
      ...course.lessons[lessonIndex],
      duration: secondsToMinutes(course.lessons[lessonIndex].duration),
      position: lessonIndex < 9 ? `0${lessonIndex + 1}` : lessonIndex + 1,
    };
  }, [course.lessons, lessonIndex]);

  const onStateChange = useCallback(
    state => {
      if (state === 'ended') {
        addCompletedLesson(course.lessons[lessonIndex].id);
        setPlaying(false);
        Alert.alert('video has finished playing!');
      }
    },
    [addCompletedLesson, course.lessons, lessonIndex],
  );

  useEffect(() => {
    getYoutubeMeta(selectedLesson.video_id).then(meta => {
      setVideoHeight(meta.height);
    });
  }, [selectedLesson.video_id]);

  const canNavigateToPreviousLesson = useMemo(() => {
    return lessonIndex > 0;
  }, [lessonIndex]);

  const canNavigateToNextLesson = useMemo(() => {
    return lessonIndex < course.lessons.length - 1;
  }, [course.lessons.length, lessonIndex]);

  const handleNavigateToPreviousLesson = useCallback(() => {
    if (canNavigateToPreviousLesson) {
      setLessonIndex(previousValue => previousValue - 1);
      setLoading(true);
    }
  }, [canNavigateToPreviousLesson]);

  const handleNavigateToNextLesson = useCallback(() => {
    if (canNavigateToNextLesson) {
      setLoading(true);
      setLessonIndex(previousValue => previousValue + 1);
    }
  }, [canNavigateToNextLesson]);

  return (
    <Container>
      <LessonsHeader />

      <VideoContainer style={{ height: videoHeight }}>
        <YoutubePlayer
          onReady={() => {
            setLoading(false);
          }}
          initialPlayerParams={{ controls: true }}
          height={videoHeight}
          play={playing}
          videoId={selectedLesson.video_id}
          onChangeState={onStateChange}
        />
        {loading && (
          <ActivityIndicator
            color="#6548a3"
            size="large"
            style={{
              position: 'absolute',
              top: '50%',
              right: '50%',
              zIndex: -1,
            }}
          />
        )}
      </VideoContainer>

      <Content>
        <LessonName>{selectedLesson.name}</LessonName>

        <DetailsContainer>
          <LessonNumber>Aula {selectedLesson.position}</LessonNumber>
          <Feather name="clock" size={12} color="#C4C4D1" />
          <LessonDuration>{selectedLesson.duration} min</LessonDuration>
        </DetailsContainer>

        <LessonDescription>{selectedLesson.description}</LessonDescription>
      </Content>

      <Footer>
        <PreviousLessonButton
          active={canNavigateToPreviousLesson}
          onPress={handleNavigateToPreviousLesson}
        >
          <Feather
            name="arrow-left"
            size={24}
            color={canNavigateToPreviousLesson ? '#fff' : '#FF6680'}
          />
          <PreviousLessonButtonText active={canNavigateToPreviousLesson}>
            Aula anterior
          </PreviousLessonButtonText>
        </PreviousLessonButton>

        <NextLessonButton
          active={canNavigateToNextLesson}
          onPress={handleNavigateToNextLesson}
        >
          <NextLessonButtonText active={canNavigateToNextLesson}>
            Próxima aula
          </NextLessonButtonText>
          <Feather
            name="arrow-right"
            size={24}
            color={canNavigateToNextLesson ? '#fff' : '#FF6680'}
          />
        </NextLessonButton>
      </Footer>
    </Container>
  );
};

export default LessonDetail;
