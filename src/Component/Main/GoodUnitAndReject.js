import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import R from '../R';
import { CGeneral } from '../Common/Selector';


/**
 * props:{}
 * state:{}
 */
class GoodUnitAndReject extends Component {

    render(){

        const {navigation} = this.props;

        return(

            <CGeneral>

                <View style={{flex:1}}>

                </View>

                <View style={{flex:2, flexDirection:'row'}}>

                    <View style={{flex:1, backgroundColor:'#F3F5F7', padding:30, borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}}>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                            <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('modal')} style={{height:40, width:40, borderRadius:20, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                            <Text style={{fontSize:22, color:'#3F4246', fontWeight:'700', lineHeight:40}}>GOOD</Text>

                            <TouchableOpacity activeOpacity={0.8} style={{height:40, width:40, borderRadius:20, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                        </View>

                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>

                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}} />

                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3, marginLeft:15}} />

                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3, marginLeft:15}} />

                        </View>

                        <View style={{flexDirection:'row', height:50, marginTop:20}}>

                            <TouchableOpacity activeOpacity={0.8} style={{flex:361, backgroundColor:'#20AD55', justifyContent:'center', alignItems:'center', borderRadius:35, ...R.Style.shadowButton}}>

                                <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1</Text>

                            </TouchableOpacity>

                            <TouchableOpacity activeOpacity={0.8} style={{flex:173, backgroundColor:'#405CD7', justifyContent:'center', alignItems:'center', borderRadius:35, marginLeft:15, ...R.Style.shadowButton}}>

                                <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1 Network</Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{width:30}} />

                    <View style={{flex:1, backgroundColor:'#F3F5F7', padding:30, borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}}>

                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

                            <TouchableOpacity activeOpacity={0.8} style={{height:40, width:40, borderRadius:20, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                            <Text style={{fontSize:22, color:'#3F4246', fontWeight:'700', lineHeight:40}}>REJECT</Text>

                            <TouchableOpacity activeOpacity={0.8} style={{height:40, width:40, borderRadius:20, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                        </View>

                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>

                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}} />

                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3, marginLeft:15}} />

                            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3, marginLeft:15}} />

                        </View>

                        <View style={{flexDirection:'row', height:50, marginTop:20, paddingHorizontal:56}}>

                            <TouchableOpacity activeOpacity={0.8} style={{flex:361, backgroundColor:'#FA6348', justifyContent:'center', alignItems:'center', borderRadius:35, ...R.Style.shadowButton}}>

                                <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1</Text>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </CGeneral>
        );
    }
}

export {GoodUnitAndReject}