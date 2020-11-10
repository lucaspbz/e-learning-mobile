import React from 'react';

import { Container, ItemDescription, ItemName, ItemImg } from './styles';

export interface ICourse {
  id: string;
  name: string;
  image: string;
  lessons: ILesson[];
}

interface ILesson {
  id: string;
  name: string;
  duration: number;
  description: string;
  video_id: string;
}

interface ICrouseItemProps {
  course: ICourse;
}

const CourseItem: React.FC<ICrouseItemProps> = ({ course }) => {
  return (
    <Container>
      <ItemImg source={{ uri: course.image, width: 64, height: 64 }} />

      <ItemName>{course.name}</ItemName>
      <ItemDescription>{course.lessons.length} aulas</ItemDescription>
    </Container>
  );
};

export default CourseItem;
