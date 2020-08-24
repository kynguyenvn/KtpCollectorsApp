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

            <View style={{flex: 1, flexDirection: 'row'}}>

                <View style={{flex:482, backgroundColor:'#FFF', flexDirection: 'column'}}>

                    <View style={{width:60, height:79, backgroundColor:'#00538B', marginLeft:30, marginTop:30}} />

                    <View style={{flex:1, marginLeft:30, justifyContent: 'center'}}>

                        <CDataLink label='Data Collector ID' />

                        <CDataLink label='Line' isMarginTopLink />

                        <CDataLink label='Line ID' isMarginTopLink />

                        <CDataLink label='Workstation' isMarginTopLink />

                        <CDataLink label='Workstation ID' isMarginTopLink />

                    </View>

                    <View style={{height:84, flexDirection: 'row', alignItems:'center', justifyContent:'space-between', borderTopWidth:1, borderTopColor:'#DBE2E8'}}>

                        <Text style={{fontSize:16, color:'#00538B', fontWeight:'600', marginLeft:30}}>RELINK DATA COLLECTOR</Text>
                        
                        <TouchableOpacity activeOpacity={0.8} style={{width:56, height:50, marginRight:10, justifyContent:'center', alignItems: 'center'}}>
                            
                            <Text style={{color:'#00538B'}}>{'-->'}</Text>
                        
                        </TouchableOpacity>

                    </View>

                </View>

                <View style={{flex:884, backgroundColor:'#00538B', justifyContent: 'center', alignItems: 'center'}}>

                    <View style={{width:484, padding: 50, backgroundColor:'#FFF', borderRadius: 8}}>

                        <CTextInput label='User ID' />

                        <CTextInput label='Password' isMarginTop />

                        <CButton onPressLogin={()=>navigation.navigate('main')} />

                    </View>

                </View>
            
            </View>

            </>
        );
    }
}


/**
 * @param label
 * @param isMarginTopLink
 */
const CDataLink = ({label='', isMarginTopLink=false, dataLink}) => {

    return <View style={{marginTop:isMarginTopLink?20:null}}>

        <Text numberOfLines={1} style={{fontSize:13, color:'#6B7B8B'}}>{label}</Text>

        <Text style={{fontSize:16, color:'#2C2C2C', marginTop:3}}>{dataLink||'N/A'}</Text>

    </View>
};


/**
 * @param label
 * @param isMarginTop
 */
const CTextInput = ({label='', isMarginTop=false}) => {

    return <View style={{marginTop:isMarginTop?30:null}}>

        <Text style={{fontSize:13, color:'#2C2C2C', lineHeight:21}}>{label.toUpperCase()}</Text>

        <TextInput placeholder='Enter...' placeholderTextColor='#6B7B8B' style={{height:50, fontSize:16, paddingLeft:15, marginTop:10, borderWidth:1, borderColor:'#DBE2E8', borderRadius:2}} />

    </View>
};


/**
 * @param onPressLogin
 */
const CButton = ({onPressLogin=()=>{}}) => {

    return <TouchableOpacity onPress={onPressLogin} style={{height:50, backgroundColor:'#00538B', marginTop:30, justifyContent: 'center', alignItems: 'center', borderRadius:25}}>

          <Text style={{fontSize:16, color:'#FFF'}}>SIGN IN</Text>

    </TouchableOpacity>
};
