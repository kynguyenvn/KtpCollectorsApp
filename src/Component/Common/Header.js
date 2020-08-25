
import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import R from '../R';

export function Header() {
  return (
    <SafeAreaView
      style={{ flex: 1, flexDirection: 'row',alignItems: 'center',paddingVertical: 5}}>
      <View style={{flex: 1}}>
        <Text>
          {'Line: KT line 1  -  W/S: Cap  -  P/N: PB87624  -  B/N: B493743'}
        </Text>
      </View>
      <View style={{width: 40,height: 40,borderRadius: 20, backgroundColor: R.C.successColor2, marginHorizontal: 5,}}/>
      <Text>{'Connected'}</Text>
      <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: R.C.successColor2, marginLeft: 10, marginRight: 5}}/>
      <Text>{'Bermie Brown'}</Text>
    </SafeAreaView>
  );
}
