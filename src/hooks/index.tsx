import React from 'react';

import { ClassesProvider } from './class';

const AppProvider: React.FC = ({ children }) => {
  return <ClassesProvider>{children}</ClassesProvider>;
};

export default AppProvider;
