import React, { useMemo } from 'react';

import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';
import { useClass } from '../../hooks/class';

import { Container } from './styles';

const MyCourses: React.FC = () => {
  const { data: allCourses, favouriteCourses } = useClass();

  const data = useMemo(() => {
    return allCourses.filter(course => favouriteCourses.includes(course.id));
  }, [allCourses, favouriteCourses]);

  return (
    <Container>
      <SearchHeader />

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
