import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Rubik_400Regular, useFonts } from '@expo-google-fonts/rubik';
import { NavigationContainer } from '@react-navigation/native';

import { AppLoading } from 'expo';
import Routes from './src/routes';

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Routes />
      <StatusBar style="light" />
    </NavigationContainer>
  );
};

export default App;
