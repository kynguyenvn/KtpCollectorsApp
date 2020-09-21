import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import R from '../R';


/**
 * 
 */
const TabBar = ({tabs, activeTab, goToPage, style}) => {

    const iconNames=['settings', 'settings', 'swap-horizontal', 'settings', 'settings'];

    return <View style={{flexDirection:'row', backgroundColor: '#F3F5F7', paddingTop: 10, paddingBottom: 20, paddingHorizontal: 50, ...style}}>

        {tabs.map((tab, i) => {
            return i===0?null:<TouchableOpacity key={tab} activeOpacity={0.8} onPress={() => goToPage(i)} style={{flex: 1, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent:'center', paddingHorizontal:20, backgroundColor:activeTab===i?'#405CD7':'#00538B', marginLeft:i===1?null:20, borderRadius: 3, ...activeTab===i?{...R.Style.shadowTabBar}:{}}}>
                
                <Ionicons name={iconNames[i]} style={{fontSize:20, color:'#FFFFFF', marginRight: 10}} />
                
                <Text numberOfLines={1} style={{fontSize: 20, color: '#FFFFFF', fontWeight: '600', lineHeight: 30}}>{tab}</Text>
                
            </TouchableOpacity>;
        
        })}
    
    </View>
};


export { TabBar }