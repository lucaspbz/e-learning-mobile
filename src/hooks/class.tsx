import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { ICourse } from '../components/CourseItem';
import api from '../services/api';

interface IClassState {
  courses: ICourse[];
  favouriteCourses: string[];
}

interface IClassContextData {
  data: ICourse[];
  favouriteCourses: string[];
  completedLessons: string[];

  selectedCourse: ICourse;

  setSelectedCourse(course: ICourse): void;
  setFavourite(course_id: string): void;
  unsetFavourite(course_id: string): void;
  isFavourite(course_id: string): boolean;
  addCompletedLesson(lesson_id: string): void;
  isCompleted(lesson_id: string): boolean;
}
const ClassContext = createContext<IClassContextData>({} as IClassContextData);

const ClassesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IClassState>({} as IClassState);
  const [course, setCourse] = useState<ICourse>({} as ICourse);
  const [favouriteCourses, setFavouriteCourses] = useState<string[]>([]);
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    api.get<ICourse[]>('/courses').then(({ data }) => {
      setData(oldState => ({ ...oldState, courses: [...data] }));
    });
  }, []);

  const setSelectedCourse = useCallback((course: ICourse) => {
    setCourse(course);
  }, []);

  const setFavourite = useCallback(
    (course_id: string) => {
      if (!favouriteCourses.includes(course_id)) {
        setFavouriteCourses([...favouriteCourses, course_id]);
      } else {
        setFavouriteCourses(
          favouriteCourses.filter(course => course !== course_id),
        );
      }
    },
    [favouriteCourses],
  );

  const unsetFavourite = useCallback(
    (course_id: string) => {
      setFavouriteCourses(
        favouriteCourses.filter(course => course !== course_id),
      );
    },
    [favouriteCourses],
  );

  const isFavourite = useCallback(
    (course_id: string): boolean => {
      return favouriteCourses.includes(course_id);
    },
    [favouriteCourses],
  );

  const addCompletedLesson = useCallback(
    (lesson_id: string) => {
      if (!completedLessons.includes(lesson_id)) {
        setCompletedLessons([...completedLessons, lesson_id]);
      }
    },
    [completedLessons],
  );

  const isCompleted = useCallback(
    (lesson_id: string): boolean => {
      return completedLessons.includes(lesson_id);
    },
    [completedLessons],
  );
  return (
    <ClassContext.Provider
      value={{
        selectedCourse: course,
        setSelectedCourse,
        data: data.courses,
        favouriteCourses,
        setFavourite,
        unsetFavourite,
        isFavourite,
        completedLessons,
        addCompletedLesson,
        isCompleted,
      }}
    >
      {children}
    </ClassContext.Provider>
  );
};

function useClass(): IClassContextData {
  return useContext(ClassContext);
}

export { ClassesProvider, useClass };
