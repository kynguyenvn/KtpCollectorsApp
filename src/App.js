import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import UNavigator from './System/UNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <UNavigator.AccountStack />
    </NavigationContainer>
  );
};

export default App;
