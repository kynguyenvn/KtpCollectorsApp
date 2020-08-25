import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../Component/Account/LoginScreen';
import UColor from './UColor';
import MainScreen from '../Component/Main/MainScreen';
import {Header} from '../Component/Common/Header';

const Stack = createStackNavigator();
// export const navigationRef = React.createRef();

export default class UNavigation {
  /**
   *
   */
  static navigationRef = React.createRef();

  /**
   *
   */
  static AccountStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="login" component={LoginScreen} />
      </Stack.Navigator>
    );
  };

  /**
   *
   */
  static MainStack = () => {
    return (
      <Stack.Navigator
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardOverlayEnabled: true,
          headerHideShadow: true,
          headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: UColor.headerBackgroundColor,
            shadowColor: 'transparent',
            elevation: 0,
          },
        }}>
        <Stack.Screen
          name="main"
          component={MainScreen}
          options={{
            headerTitle: (props) => <Header {...props} />,
          }}
        />
      </Stack.Navigator>
    );
  };

  /**
   *
   * @param name
   * @param params
   * @returns {navigate}
   */
  static navigate = async (name = '', params) => {
    UNavigation.navigationRef.current?.navigate(name, params);
  };
}
