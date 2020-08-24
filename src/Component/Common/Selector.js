import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


/**
 * @param buttonName
 * @param onPressLogin
 */
const CButton = ({buttonName='', onPress=()=>{}}) => {

    return <TouchableOpacity onPress={onPress} style={{height:50, backgroundColor:'#00538B', marginTop:30, justifyContent: 'center', alignItems: 'center', borderRadius:25}}>

          <Text style={{fontSize:16, color:'#FFF'}}>{buttonName.toUpperCase()}</Text>

    </TouchableOpacity>
};


export {
    CButton
}