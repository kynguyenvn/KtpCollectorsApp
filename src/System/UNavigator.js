import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../Component/Account/LoginScreen';
import MainScreen from '../Component/Main/MainScreen';

const Stack = createStackNavigator();

export default class UNavigation {
  
    static AccountStack = () => {
        
        return (
            
            <Stack.Navigator screenOptions={{headerShown: false}}>
                
                <Stack.Screen options={{title: 'Login'}} name="login" component={LoginScreen} />
                <Stack.Screen options={{title: 'Main'}} name="main" component={MainScreen} />
            
            </Stack.Navigator>
        );
    };

    static MainStack = () => {
        
        return (
            
            <Stack.Navigator>
              
                <Stack.Screen name="main" component={MainScreen} />
            
            </Stack.Navigator>
        );
    };
}
