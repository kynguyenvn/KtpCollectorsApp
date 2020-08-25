import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {useNetInfo} from '@react-native-community/netinfo';
import R from '../R';

/**
 * props:{}
 */
export function Header() {
  
  const netInfo = useNetInfo();
  
  console.log('netInfor', R.Net.isConnected);
  
  return (
    
    <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor:'#F3F5F7', paddingVertical:10, paddingHorizontal:50}}>

      <View style={{flex:1, width:100, flexDirection:'row', alignItems: 'center'}}>
        
        <View style={{width:46, height:60, backgroundColor: R.C.ktpColors}} />

        <DataLink line='KT line 1' wStation='Cap' PN='PB87624' BN='B493743' />
      
      </View>
      
      <View style={{width:40, height:40, borderRadius: 20, backgroundColor: netInfo.isConnected?R.C.successColor2:R.C.rejectColor}}/>
      
      <Text style={{fontSize:16, color:'#58616A', lineHeight:24, marginLeft:12}}>Connected</Text>

      <UserThumbnail name='Bermie Brown' />
    
    </View>
  
  );
}

/**
 * @param line
 * @param wStation
 * @param PN
 * @param BN
 */
const DataLink = ({line='', wStation='', PN='', BN=''}) => {

  return <Text numberOfLines={1} style={{fontSize:16, color:'#3F4246', fontWeight:'600', lineHeight:20, marginLeft:50}}>Line: {line||'N/A'} - W/S: {wStation||'N/A'} - P/N: {PN||'N/A'} - B/N: {BN||'N/A'}</Text>
  
};


/**
 * @param name
 * @param backgroundColor
 */
const UserThumbnail = ({name='', backgroundColor='#00538B'}) => {

  const size = 40;

  const borderRadius = size/2;

  return <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
      
    <View style={{height:size, width:size, borderRadius:borderRadius, justifyContent:'center', alignItems:'center', backgroundColor:backgroundColor}}>

      <Text style={{fontSize:16, color:'#FFFFFF', fontWeight:'500'}}>{name?name.substr(0,2).toUpperCase():''}</Text>

    </View>
    
    <TouchableOpacity activeOpacity={0.8} style={{height:40, flexDirection:'row', alignItems:'center'}}>
    
      <Text style={{fontSize:16, color:'#58616A', lineHeight:24, marginLeft:12}}>{name}</Text>

      <View style={{width:12, height:12, backgroundColor:'#00538B', marginLeft:12}} />

    </TouchableOpacity>
  
  </View>
};
