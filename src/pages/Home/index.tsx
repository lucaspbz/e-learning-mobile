import React from 'react';

import { ICourse } from '../../components/CourseItem';
import CoursesList from '../../components/CoursesList';
import SearchHeader from '../../components/SearchHeader';

import { Container } from './styles';

const Home: React.FC = () => {
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
          video_id: 'cZvWDTqTGKg',
          completed: true,
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f553',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba356-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
      ],
    },
    {
      id: '97454544-d278-43cb-b6e9-5f4f4e66ae580',
      name: 'Física',
      image:
        'data:image/png;base64,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',
      lessons: [
        {
          id: 'f3107b27-22d1-4a03-ba36-d7124c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-45a03-ba36-d714c4fa0f253',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d7142c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
      ],
    },
    {
      id: '97454544-d278-543cb-b6e9-f4f4e66ae580',
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
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
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
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
      ],
    },
    {
      id: '97454544-5d278-43cb-b6e9-f4f4e66ae580',
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
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
      ],
    },
    {
      id: '974554544-d278-43cb-b6e9-f4f4e66ae580',
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
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
      ],
    },
    {
      id: '97454544-d278-43cb-b6e95-f4f4e66ae580',
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
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
        {
          id: 'f3107b27-22d1-4a03-ba36-d714c4fa0f53',
          name: 'Preparando ambiente de desenvolvimento',
          duration: 2000,
          description:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos aut doloribus similique fugit sequi magnam dolore dolorem repudiandae, modi commodi nesciunt asperiores facere enim nostrum possimus corporis voluptatibus excepturi quae?',
          video_id: 'cZvWDTqTGKg',
        },
      ],
    },
  ];
  return (
    <Container>
      <SearchHeader />

      <CoursesList data={data} />
    </Container>
  );
};

export default Home;
