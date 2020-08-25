import React from 'react';
import {Text, TouchableOpacity} from 'react-native';


/**
 * @param buttonName
 * @param onPressLogin
 */
const CButton = ({buttonName='', onPress=()=>{}, marginTop=30, color='#FFF', backgroundColor='#00538B', borderColor='#00538B', style}) => {

    return <TouchableOpacity 
                activeOpacity={0.8} 
                onPress={onPress} 
                style={{
                    height:48, 
                    backgroundColor:backgroundColor, 
                    marginTop:marginTop, 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    borderWidth:2, 
                    borderColor:borderColor, 
                    borderRadius:25, ...style
                }}
            >

        <Text style={{fontSize:16, color:color, fontWeight:'600'}}>{buttonName.toUpperCase()}</Text>

    </TouchableOpacity>
};


export {
    CButton
}