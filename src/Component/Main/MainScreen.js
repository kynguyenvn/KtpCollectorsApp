import React from 'react';
import {Text, SafeAreaView} from 'react-native';

export function MainScreen() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <Text>{'MainScreen'}</Text>
    </SafeAreaView>
  );
}
