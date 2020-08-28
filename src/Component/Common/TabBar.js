import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


/**
 * 
 */
const TabBar = ({tabs, activeTab, goToPage, style}) => {

    return <View style={{flexDirection:'row', backgroundColor: '#F3F5F7', paddingTop: 10, paddingBottom: 20, paddingHorizontal: 50, ...style}}>

        {tabs.map((tab, i) => {
            return i===0?null:<TouchableOpacity key={tab} activeOpacity={0.8} onPress={() => goToPage(i)} style={{flex: 1, height: 70, flexDirection: 'row', alignItems: 'center', justifyContent:'center', paddingHorizontal:20, backgroundColor:activeTab===i?'#405CD7':'#00538B', marginLeft:i===1?null:20, borderRadius: 3}}>
                
                <View style={{width: 20, height: 20, borderRadius: 10, marginRight: 15, backgroundColor: '#FFF'}} />
                
                <Text numberOfLines={1} style={{fontSize: 20, color: '#FFFFFF', fontWeight: '600', lineHeight: 30}}>{tab}</Text>
                
            </TouchableOpacity>;
        
        })}
    
    </View>
};


export { TabBar }