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
  selectedCourse: ICourse;
  setSelectedCourse(course: ICourse): void;
  setFavourite(course_id: string): void;
}
const ClassContext = createContext<IClassContextData>({} as IClassContextData);

const ClassesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IClassState>({} as IClassState);
  const [course, setCourse] = useState<ICourse>({} as ICourse);
  const [favouriteCourses, setFavouriteCourses] = useState<string[]>([]);

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
      }
    },
    [favouriteCourses],
  );

  return (
    <ClassContext.Provider
      value={{
        selectedCourse: course,
        setSelectedCourse,
        data: data.courses,
        favouriteCourses,
        setFavourite,
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
