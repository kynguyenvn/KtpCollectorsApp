import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';


/**
 * 
 */
const TabBar = ({tabs, activeTab, goToPage}) => {

    return <View style={{backgroundColor:'#F3F5F7', flexDirection:'row', justifyContent:'space-between', paddingTop:10, paddingBottom:30, paddingHorizontal:50}}>
        
        <FlatList
            data={tabs.map(tab=>({label: tab}))}
            keyExtractor={item => item.label}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}

            horizontal={true}

            // ListHeaderComponent={()=><View style={{width: 30}}/>}
            ItemSeparatorComponent={()=><View style={{width: 20}}/>}
            // ListFooterComponent={()=><View style={{width: 30}}/>}

            renderItem={
                ({item, index}) =>{
                    return <View style={{height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: activeTab === index ?'#405CD7':'#00538B', paddingHorizontal:30, borderRadius: 3}}>

                        <TouchableOpacity onPress={() => goToPage(index)} style={{flex: 1, flexDirection:'row', alignItems: 'center'}}>
                            
                            <View style={{width:20, height:20, borderRadius:10, marginRight:15, backgroundColor:'#FFF'}} />
                            
                            <Text style={{fontSize:20, color:'#FFFFFF', fontWeight:'600', lineHeight:30}}>{item.label}</Text>
                        
                        </TouchableOpacity>

                    </View>;
                }}
        />
    </View>
};


export {TabBar}