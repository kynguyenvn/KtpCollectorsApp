import React, {Component} from 'react';
import {Text, View, SafeAreaView, TouchableOpacity, StatusBar} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';


/**
 * props: {
 *          navigation,
 * }
 * 
 * state:{}
 */
export default class LoginScreen extends Component {
    
  
    /**
     * 
     */
    render(){

        const {navigation} = this.props;
        
        return (

            <>

            <StatusBar hidden />

            <SafeAreaView style={{flex: 1, flexDirection: 'row'}}>

                <View style={{flex:482, backgroundColor:'#FFF'}}>

                </View>

                <View style={{flex:884, backgroundColor:'#00538B', justifyContent: 'center', alignItems: 'center'}}>

                    <View style={{width:484, height:372, padding: 50, backgroundColor:'#FFF', borderRadius: 8}}>

                        <CTextInput label='User ID' />

                        <CTextInput label='Password' isMarginTop />

                        <CButton onPressLogin={()=>navigation.navigate('main')} />

                    </View>

                </View>
            
            </SafeAreaView>

            </>
        );
    }
}

/**
 * @param label
 * @param isMarginTop
 */
const CTextInput = ({label='', isMarginTop=false}) => {

    return <View style={{marginTop:isMarginTop?30:null}}>

        <Text style={{fontSize:13, color:'#2C2C2C', lineHeight:21}}>{label.toUpperCase()}</Text>

        <TextInput placeholder='Enter...' placeholderTextColor='#6B7B8B' style={{height:50, paddingLeft:15, fontSize:16, marginTop:10, borderWidth:1, borderColor:'#DBE2E8', borderRadius:2}} />

    </View>
};

/**
 * 
 */
const CButton = ({onPressLogin=()=>{}}) => {

    return <TouchableOpacity onPress={onPressLogin} style={{height:50, backgroundColor:'#00538B', marginTop:30, justifyContent: 'center', alignItems: 'center', borderRadius:25}}>

          <Text style={{fontSize:16, color:'#FFF'}}>SIGN IN</Text>

    </TouchableOpacity>
};
