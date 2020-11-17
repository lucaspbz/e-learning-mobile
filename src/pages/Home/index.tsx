import React, { useCallback, useMemo, useState } from 'react';

import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';
import { useClass } from '../../hooks/class';

import { Container } from './styles';

const Home: React.FC = () => {
  const { data } = useClass();

  const [filter, setFilter] = useState('');

  const handleChangeSearchParams = useCallback((searchParam: string) => {
    setFilter(searchParam);
  }, []);

  const filteredData = useMemo(() => {
    return data.filter(course => course.name.toLowerCase().includes(filter));
  }, [data, filter]);

  return (
    <Container>
      <SearchHeader onChange={handleChangeSearchParams} />

      <CoursesList data={filteredData} />
    </Container>
  );
};

export default Home;
