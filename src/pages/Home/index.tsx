import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { ICourse } from '../../components/CourseItem';
import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';
import api from '../../services/api';

import { Container } from './styles';

const Home: React.FC = () => {
  const [data, setData] = useState<ICourse[]>([]);

  useEffect(() => {
    api
      .get<ICourse[]>('/courses')
      .then(({ data }) => {
        setData(data);
      })
      .catch(error => {
        Alert.alert('Erro:', error.message);
      });
  }, []);
  return (
    <Container>
      <SearchHeader />

      <CoursesList data={data} />
    </Container>
  );
};

export default Home;
