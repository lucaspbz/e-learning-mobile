import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';
import TabNavigator from './tab.routes';
import Lessons from '../pages/Lessons';
import LessonDetail from '../pages/LessonDetail';

const Routes: React.FC = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Lessons" component={Lessons} />
      <Stack.Screen name="LessonDetail" component={LessonDetail} />
      <Stack.Screen name="TabNavigation" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default Routes;
