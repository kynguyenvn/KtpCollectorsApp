import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';



/**
 * @param batchNumber
 * @param partNumber
 * @param description
 */
const SelectorBatchItem = ({batchNumber='', partNumber='', description=''}) => {

    const [actived, setActived] = useState(false)

    return <TouchableOpacity activeOpacity={0.8} onPress={()=>setActived(!actived)} style={{flexDirection:'row', alignItems:'center', backgroundColor:actived?'#20AD55':'#FFFFFF'}}>

        <View style={{flex:168}}>
            <Text numberOfLines={1} style={{fontSize:16, color:actived?'#FFFFFF':'#3F4246', fontWeight:actived?'600':'300', marginVertical:20, paddingLeft:30}}>{batchNumber||'n/a'}</Text>
        </View>

        <View style={{width:1, height:'100%', backgroundColor:'#DBE2E8'}} />
        
        <View style={{flex:238}}>
            <Text numberOfLines={1} style={{flex:238, fontSize:16, color:actived?'#FFFFFF':'#3F4246', fontWeight:actived?'600':'300', marginVertical:20, paddingLeft:30}}>{partNumber||'n/a'}</Text>
        </View>

        <View style={{width:1, height:'100%', backgroundColor:'#DBE2E8'}} />
        
        <View style={{flex:419}}>
            <Text numberOfLines={1} style={{flex:419, fontSize:16, color:actived?'#FFFFFF':'#3F4246', fontWeight:actived?'600':'300', marginVertical:20, paddingLeft:30}}>{description}</Text>
        </View>

    </TouchableOpacity>
};

export {SelectorBatchItem}