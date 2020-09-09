import React from 'react';
import 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';
import {useKeepAwake} from 'expo-keep-awake';
import UNavigator from './System/UNavigator';

export const AuthContext = React.createContext();
const App = () => {
  useKeepAwake();
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            userToken: action.token,
          };
      }
    },
    {
      userToken: null,
    },
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'});
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer ref={UNavigator.navigationRef}>
        {state.userToken ? UNavigator.MainStack() : UNavigator.AccountStack()}
        <FlashMessage />
        <StatusBar hidden />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
