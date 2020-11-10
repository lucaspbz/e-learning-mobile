import React, { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';
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

const LessonDetail: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  const [videoHeight, setVideoHeight] = useState(300);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);

  useEffect(() => {
    getYoutubeMeta('iee2TATGMyI').then(meta => {
      setVideoHeight(meta.height);
    });
  }, []);
  return (
    <Container>
      <LessonsHeader />

      <VideoContainer style={{ height: videoHeight }}>
        <YoutubePlayer
          initialPlayerParams={{ controls: true }}
          height={videoHeight}
          play={playing}
          videoId="iee2TATGMyI"
          onChangeState={onStateChange}
        />
      </VideoContainer>

      <Content>
        <LessonName>Introdução à teoria da Matemática</LessonName>

        <DetailsContainer>
          <LessonNumber>Aula 01</LessonNumber>
          <Feather name="clock" size={12} color="#C4C4D1" />
          <LessonDuration>5min</LessonDuration>
        </DetailsContainer>

        <LessonDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          distinctio eius quo nihil excepturi asperiores obcaecati dolorem
          necessitatibus doloremque? Facere quis, reiciendis necessitatibus
          maiores ipsa vitae eos? Eveniet, aut qui. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Incidunt cumque sapiente nesciunt.
          Facilis consequuntur, pariatur ipsum alias reiciendis fugit incidunt,
          ut quasi id eaque veritatis aliquam autem dolore. Vitae, natus.
        </LessonDescription>
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
