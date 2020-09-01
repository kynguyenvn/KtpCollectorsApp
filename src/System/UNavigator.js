import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../Component/Account/LoginScreen';
import UColor from './UColor';
import MainScreen from '../Component/Main/MainScreen';
import {Header} from '../Component/Common/Header';
import {NumpadScreen} from '../Component/Main/NumpadScreen';



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
        animationEnabled
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
        mode='modal'
        screenOptions={{
          cardStyle: {backgroundColor: 'transparent'},
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.5, 0.9, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: 'clamp',
              }),
            },
          }),
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
            headerStyle: {
              backgroundColor:'#F3F5F7'
            },
            header: (props) => <Header {...props} />,
          }}
        />
        <Stack.Screen
          name="numpad"
          component={NumpadScreen}
          options={{
            headerStyle: {
              backgroundColor:'#F3F5F7'
            },
            header: (props) => <Header {...props} />,
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
