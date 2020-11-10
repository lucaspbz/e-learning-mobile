import React from 'react';
import { ICourse } from '../../components/CourseItem';
import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';

import { Container } from './styles';

const MyCourses: React.FC = () => {
  const data: ICourse[] = [
    {
      id: '97454544-d278-43cb-b6e9-f4f4e66ae580',
      name: 'Matemática',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS0G8nml_QHC9RHxbwtMYsH-cOdHpSl-yRHZQ&usqp=CAU',
      lessons: [
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
      ],
    },
    {
      id: '97454544-d278-43cb-b6e9-f4f4e66ae580',
      name: 'Inglês',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRpZw36YNs_nzwzGNuhtxr0mNpwqHO9N7GSbQ&usqp=CAU',
      lessons: [
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'https://www.youtube.com/watch?v=cZvWDTqTGKg',
        },
      ],
    },
  ];

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
