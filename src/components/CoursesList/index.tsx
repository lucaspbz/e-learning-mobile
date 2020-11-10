import React from 'react';
import CourseItem, { ICourse } from '../CourseItem';

import {
  Container,
  Category,
  ContentHeader,
  ContentList,
  CoursesQuantity,
} from './styles';

interface ICourseListProps {
  data: ICourse[];
  listHeader?: string;
  shouldShowDataLenght?: boolean;
  shouldHaveDeletableItems?: boolean;
}

const CoursesList: React.FC<ICourseListProps> = ({
  data,
  listHeader = 'Categorias',
  shouldShowDataLenght = true,
  shouldHaveDeletableItems = false,
}) => {
  return (
    <Container>
      <ContentHeader>
        <Category>{listHeader}</Category>
        {shouldShowDataLenght && (
          <CoursesQuantity>{data.length} cursos</CoursesQuantity>
        )}
      </ContentHeader>

      <ContentList
        data={data}
        renderItem={item => {
          const course = item.item as ICourse;
          return (
            <CourseItem
              course={course}
              isDeletable={shouldHaveDeletableItems}
            />
          );
        }}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={{
          paddingLeft: 24,
        }}
      />
    </Container>
  );
};

export default CoursesList;
