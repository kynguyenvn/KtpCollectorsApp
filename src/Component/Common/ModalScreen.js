import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import R from '../R';



/**
 * props:{}
 * state:{}
 */
class ModalScreen extends Component {

    render(){

        const {navigation} = this.props;

        return(

            <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.6)', paddingTop:74, paddingBottom:74}}>

                <View style={{maxWidth:604, width:504, backgroundColor:'#FFFFFF', borderRadius:8, overflow:'hidden', ...R.Style.shadowModal}}>

                    <View style={{height:74, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#00538B', borderTopLeftRadius:8, borderTopRightRadius:8}}>

                        <Text style={{fontSize:20, color:'#FFF', fontWeight:'600', lineHeight:30, marginLeft:30}}>CHOOSE REASEN CODE</Text>
                    
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()} style={{height:60, width:66, justifyContent:'center', alignItems:'center'}}>
                            
                            <Text style={{fontSize:20, color:'#FFF', fontWeight:'700'}}>X</Text>
                        
                        </TouchableOpacity>

                    </View>

                    <View style={{height:74, flexDirection:'row'}}>

                        <View style={{flex:170, justifyContent:'center', backgroundColor:'#F3F5F7', paddingLeft:30}}>

                        </View>

                        <View style={{flex:1, width:1, backgroundColor:'#CAD3DB'}} />

                        <View style={{flex:439, justifyContent:'center', paddingLeft:30}}>

                        </View>

                    </View>

                </View>

                

            </View>
        );
    }
}


export {ModalScreen}