import React, { createContext, useCallback, useContext, useState } from 'react';
import { ICourse } from '../components/CourseItem';

interface IClassState {
  course: ICourse;
}

interface IClassContextData {
  course: ICourse;
  setSelectedCourse(course: ICourse): void;
}
const ClassContext = createContext<IClassContextData>({} as IClassContextData);

const ClassesProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IClassState>({} as IClassState);

  const setSelectedCourse = useCallback((course: ICourse) => {
    setData({ course });
  }, []);

  return (
    <ClassContext.Provider value={{ course: data.course, setSelectedCourse }}>
      {children}
    </ClassContext.Provider>
  );
};

function useClass(): IClassContextData {
  return useContext(ClassContext);
}

export { ClassesProvider, useClass };
