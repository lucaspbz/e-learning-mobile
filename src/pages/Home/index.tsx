import React from 'react';

import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';
import { useClass } from '../../hooks/class';

import { Container } from './styles';

const Home: React.FC = () => {
  const { data } = useClass();

  return (
    <Container>
      <SearchHeader />

      <CoursesList data={data} />
    </Container>
  );
};

export default Home;
