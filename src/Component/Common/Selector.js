import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import R from '../R';

/**
 * props:{}
 */
const CGeneral = (props) => {

    return  <View style={{flex: 1, flexDirection:'column', backgroundColor:'#FFF', paddingHorizontal:50, paddingBottom:30}}>
        {props.children}
    </View>
};


/**
 * @param props
 * @param title
 */
const CDetails = (props) => {

    const {goBack=()=>{}, title=''} = props;

    return <View style={{flex:1, backgroundColor:'#F3F5F7', borderWidth:1, borderColor:'#CAD3DB', borderRadius:3}}>

        <View style={{flex:123, flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
            
            <Text style={{flex:1, fontSize:30, color:'#3F4246', fontWeight:'600', lineHeight:40, textAlign:'center', marginLeft:71}}>{title.toUpperCase()}</Text>
            
            <TouchableOpacity activeOpacity={0.8} onPress={goBack} style={{height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', marginRight:30, borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}}>
                
                <Text>X</Text>
            
            </TouchableOpacity>

        </View>

        <View style={{flex:364, flexDirection:'row'}}>
            {props.children}
        </View>

    </View>
};

/**
 * 
 */
const CSmallBox = (props) => {

    const {isBorderLeftWidth=false} = props;

    return <View style={{flex:1, borderTopWidth:1, borderLeftWidth:isBorderLeftWidth?1:null, borderColor:'#CAD3DB'}}>
        {props.children}
    </View>
};


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
    CButton,
    CGeneral,
    CDetails,
    CSmallBox
}