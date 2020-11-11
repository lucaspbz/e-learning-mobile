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
  lessonId: string;
}

const LessonDetail: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [videoHeight, setVideoHeight] = useState(300);

  const { params } = useRoute();
  const { selectedCourse: course } = useClass();

  const { lessonId } = params as IParams;

  const selectedLesson = useMemo(() => {
    const lessonIndex = course.lessons.findIndex(
      lesson => lesson.id === lessonId,
    );

    return {
      ...course.lessons[lessonIndex],
      index: lessonIndex,
      duration: secondsToMinutes(course.lessons[lessonIndex].duration),
      position: lessonIndex < 9 ? `0${lessonIndex + 1}` : lessonIndex + 1,
    };
  }, [course.lessons, lessonId]);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  useEffect(() => {
    getYoutubeMeta(selectedLesson.video_id).then(meta => {
      setVideoHeight(meta.height);
    });
  }, [selectedLesson.video_id]);

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
        <PreviousLessonButton>
          <Feather name="arrow-left" size={24} color="#FF6680" />
          <PreviousLessonButtonText>Aula anterior</PreviousLessonButtonText>
        </PreviousLessonButton>

        <NextLessonButton>
          <NextLessonButtonText>Próxima aula</NextLessonButtonText>
          <Feather name="arrow-right" size={24} color="#fff" />
        </NextLessonButton>
      </Footer>
    </Container>
  );
};

export default LessonDetail;
