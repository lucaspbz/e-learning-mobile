import React, { useCallback, useMemo, useState } from 'react';

import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';
import { useClass } from '../../hooks/class';

import { Container } from './styles';

const MyCourses: React.FC = () => {
  const { data: allCourses, favouriteCourses } = useClass();

  const [filter, setFilter] = useState('');

  const handleChangeSearchParams = useCallback((searchParam: string) => {
    setFilter(searchParam);
  }, []);

  const data = useMemo(() => {
    return allCourses.filter(
      course =>
        favouriteCourses.includes(course.id) &&
        course.name.toLowerCase().includes(filter),
    );
  }, [allCourses, favouriteCourses, filter]);

  return (
    <Container>
      <SearchHeader onChange={handleChangeSearchParams} />

      <CoursesList
        data={data}
        listHeader="Cursos salvos"
        shouldShowDataLenght={false}
        shouldHaveDeletableItems
      />
    </Container>
  );
};

export default MyCourses;
