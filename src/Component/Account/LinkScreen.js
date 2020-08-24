import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from '../R';


/**
 * props:{}
 * state:{}
 */
export default class LinkScreen extends Component {

    constructor(props){
        super(props);
    }


    /**
     * 
     */
    render(){

        return(

            <View style={{flex:1, backgroundColor:'#00538B'}}>

                <View style={{width:60, height:79, backgroundColor:'#FFF', marginLeft:30, marginTop:30}} />

                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>

                    <View style={{width:484, height:522, backgroundColor:'#FFF', borderRadius:8, ...R.Style.shadow}}>

                    </View>

                </View>

                <View style={{borderTopWidth:1, borderTopColor:'rgba(219,226,232,0.1)'}}>

                    <TouchableOpacity activeOpacity={0.8} style={{height:84, flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>

                        <Text style={{marginRight:15, color:'#FFF'}}>{'<--'}</Text>

                        <Text style={{fontSize:16, color:'#FFF', fontWeight:'600'}}>BACK</Text>

                    </TouchableOpacity>

                </View>

            </View>

        );
    }
}