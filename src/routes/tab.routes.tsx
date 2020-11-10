import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Home from '../pages/Home';
import MyCourses from '../pages/MyCourses';

const TabNavigator: React.FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName = route.name === 'Home' ? 'home' : 'heart';

          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#FF6680',
        inactiveTintColor: '#C4C4D1',
        showLabel: true,
        labelPosition: 'beside-icon',
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="MyCourses"
        component={MyCourses}
        options={{ tabBarLabel: 'Salvos' }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
