import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import R from '../R';
import { CGeneral } from '../Common/Selector';
import {Hourly} from '../Common/Hourly';
import {Shift} from '../Common/Shift';
import Ionicons from 'react-native-vector-icons/Ionicons';



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
                    
                    <Shift shift={this.props.shift} currentTime={this.props.currentTime} />
                    
                    <Hourly minuteMark={this.props.minuteMark}  />

                </View>

                <View style={{flex:2, flexDirection:'row'}}>

                    <GoodUnitAndRejectItem title='Good' onPressNumpad={()=>navigation.navigate('numpad')}>

                        <TouchableOpacity activeOpacity={0.8} style={{flex:361, backgroundColor:'#20AD55', justifyContent:'center', alignItems:'center', borderRadius:35, ...R.Style.shadowButton}}>

                            <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1</Text>

                        </TouchableOpacity>

                        <TouchableOpacity activeOpacity={0.8} style={{flex:173, backgroundColor:'#405CD7', justifyContent:'center', alignItems:'center', borderRadius:35, marginLeft:15, ...R.Style.shadowButton}}>

                            <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1 Network</Text>

                        </TouchableOpacity>

                    </GoodUnitAndRejectItem>

                    <View style={{width:30}} />

                    <GoodUnitAndRejectItem title='Reject' isPaddingHorizontal>

                        <TouchableOpacity activeOpacity={0.8} style={{flex:361, flexDirection:'row', backgroundColor:'#FA6348', justifyContent:'space-between', alignItems:'center', paddingHorizontal:24, borderRadius:35, ...R.Style.shadowButton}}>

                            <Text style={{flex:1, fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30, textAlign:'center', marginLeft:24}}>+1</Text>

                            <Ionicons name='caret-down' style={{fontSize:14, color:'#FFFFFF'}} />

                        </TouchableOpacity>

                    </GoodUnitAndRejectItem>

                </View>

            </CGeneral>
        );
    }
}


/**
 * @param title
 * @param isPaddingHorizontal
 * @param onPressNumpad
 */
const GoodUnitAndRejectItem = (props) => {

    const {title='', isPaddingHorizontal=false, onPressNumpad=()=>{}} = props;

    return <View style={{flex:1, backgroundColor:'#F3F5F7', padding:30, borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}}>

        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

            <TouchableOpacity activeOpacity={0.8} onPress={onPressNumpad} style={{height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}}>

                <Ionicons name='calculator' style={{fontSize:18, color:'#00538B'}} />

            </TouchableOpacity>

            <Text style={{fontSize:22, color:'#3F4246', fontWeight:'700', lineHeight:40}}>{title.toUpperCase()}</Text>

            <TouchableOpacity activeOpacity={0.8} style={{height:40, width:40, borderRadius:20, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}}>

                <Ionicons name='arrow-undo' style={{fontSize:18, color:'#CAD3DB'}} />

            </TouchableOpacity>

        </View>

        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', marginTop:20}}>

            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3}} />

            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3, marginLeft:15}} />

            <View style={{flex:1, backgroundColor:'#FFF', justifyContent:'center', alignItems:'center', borderWidth:1, borderColor:'#DBE2E8', borderRadius:3, marginLeft:15}} />

        </View>

        <View style={{flexDirection:'row', height:50, marginTop:20, paddingHorizontal:isPaddingHorizontal?56:null}}>
            {props.children}
        </View>

    </View>
};


export {GoodUnitAndReject}