import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import R from '../R';
import { General } from '../Common/Selector';
import {Hourly} from '../Common/Hourly';
import {Shift} from '../Common/Shift';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DigitsCard} from './MainElements';



/**
 * props:{}
 * state:{}
 */
class GoodUnitAndReject extends Component {

    render(){

        const {navigation} = this.props;

        return(

            <General>
                
                <View style={{flex:1}}>
                    
                    <Shift shift={this.props.shift} currentTime={this.props.currentTime} />
                    
                    <Hourly minuteMark={this.props.minuteMark}  />

                </View>

                <View style={{flex:2, flexDirection:'row'}}>

                    <GoodUnitAndRejectItem 
                        title='Good' 
                        isButtonNetwork 
                        onPressNumpad={()=>navigation.navigate('everything')}
                        onPress={()=> R.toast.unitToast('1000 good units added', 3000)}
                    >
                        <DigitsCard unitCount={150}/>

                    </GoodUnitAndRejectItem>

                    <View style={{width:30}} />

                    <GoodUnitAndRejectItem 
                        title='Reject' 
                        backgroundColor='#FA6348' 
                        isReject
                        onPress={()=>navigation.navigate('reason')}
                    >
                        <DigitsCard unitCount={3}/>

                    </GoodUnitAndRejectItem>

                </View>

            </General>
        );
    }
}


/**
 * @param title
 * @param isReject
 * @param onPressNumpad
 * @param isButtonNetwork
 * @param backgroundColor
 * @param onPress
 */
const GoodUnitAndRejectItem = (props) => {

    const {title='', isReject=false, isButtonNetwork=false, onPressNumpad=()=>{}, backgroundColor='#20AD55', onPress=()=>{}} = props;

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

        {props.children}

        <View style={{flexDirection:'row', height:50, marginTop:20, paddingHorizontal:isReject?56:null}}>
            
            <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={{flex:361, flexDirection:'row', backgroundColor:backgroundColor, justifyContent:isReject?'space-between':'center', alignItems:'center', paddingHorizontal:isReject?24:null, borderRadius:35, ...R.Style.shadowButton}}>

                <Text numberOfLines={1} style={{flex:1, fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30, textAlign:'center', marginLeft:isReject?24:null}}>+1</Text>

                {isReject?<Ionicons name='caret-down' style={{fontSize:14, color:'#FFFFFF'}} />:null}

            </TouchableOpacity>

            {isButtonNetwork?<TouchableOpacity activeOpacity={0.8}  style={{flex:173, backgroundColor:'#405CD7', justifyContent:'center', alignItems:'center', borderRadius:35, marginLeft:15, ...R.Style.shadowButton}}>

                <Text style={{fontSize:16, color:'#FFF', fontWeight:'600', lineHeight:30}}>+1 Network</Text>

            </TouchableOpacity>:null}
        
        </View>

    </View>
};


export {GoodUnitAndReject}
