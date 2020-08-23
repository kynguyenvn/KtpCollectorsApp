import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export function LoginScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <Text>{'Sign In'}</Text>
    </SafeAreaView>
  );
}
