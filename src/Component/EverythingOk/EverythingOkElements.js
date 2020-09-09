import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


/**
 * @param data
 */
const EverythingOkItem = ({data=[], style, handleId=()=>{}}) => {

    const [categorySelection, setCategorySelection] = useState(false);

    const ButtonCategorySelection = ({onPressSelect=()=>{}, type='', index}) => (

        <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
            
            <TouchableOpacity activeOpacity={0.8} onPress={onPressSelect} 
                style={{width:30, height:30, borderRadius:15, justifyContent:'center', alignItems:'center', backgroundColor:'#FFFFFF', borderWidth:2, borderColor:data[index].id===categorySelection?'#20AD55':'#DBE2E8'}}
            >
                <View style={{width:20, height:20, borderRadius:10, backgroundColor:data[index].id===categorySelection?'#20AD55':'#FFFFFF'}} />
        
            </TouchableOpacity>

            <Text style={{fontSize:16, color:'#3F4246', fontWeight:'300', lineHeight:24, marginLeft:10}}>{type.toUpperCase()}</Text>

        </View>);

    const handleCategorySelection = (id) => {
        setCategorySelection(id);
        handleId(id);
    };

    return <View style={{flexDirection:'column', paddingBottom:20, ...style}}>

        {data.map((item, i)=>{
            return <ButtonCategorySelection key={i} index={i} id={item.id} type={item.type} onPressSelect={()=>handleCategorySelection(item.id)} />
        })}

    </View>
};

export {EverythingOkItem}