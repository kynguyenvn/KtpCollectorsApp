import React from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

export function LoginScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          backgroundColor: 'green',
        }}
        onPress={() => navigation.navigate('main')}>
        <Text>{'Sign In'}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
