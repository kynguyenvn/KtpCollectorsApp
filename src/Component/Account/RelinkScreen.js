import React, {Component} from 'react';
import {View, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import R from '../R';
import { CButton } from '../Common/Selector';
import Ionicons from 'react-native-vector-icons/Ionicons';


/**
 * props:{}
 * state:{}
 */
export default class RelinkScreen extends Component {

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

                    <View style={{width:484, alignItems:'center', backgroundColor:'#FFF', paddingHorizontal:50, paddingBottom:50, paddingTop:60, borderRadius:8, ...R.Style.shadow}}>
                        
                        <View style={{width:170, height:170, backgroundColor:'#00538B'}} />

                        <Text style={{fontSize:20, color:'#2C2C2C', fontWeight:'600', marginTop:38}}>RELINK COLLECTOR</Text>

                        <Text style={{fontSize:16, color:'#2C2C2C', textAlign:'center', marginTop:10}}>
                            Are you sure you want to relink this data collector?
                        </Text>

                        <Text style={{fontSize:16, color:'#C92626', lineHeight:24, textAlign:'center', marginTop:10}}>
                            Warning: If you select Relink, this tablet will be disconnected from the system!
                        </Text>
                        
                        <View style={{flexDirection:'row'}}>

                            <CButton buttonName='Cancel' backgroundColor='#FFF' color='#2C2C2C' borderColor='#DBE2E8' style={{flex:1}} />

                            <CButton buttonName='Relink' backgroundColor='#C92626' borderColor='#C92626' style={{flex:1, marginLeft:24}} />

                        </View>

                    </View>

                </View>

                <View style={{borderTopWidth:1, borderTopColor:'rgba(219,226,232,0.1)'}}>

                    <TouchableOpacity activeOpacity={0.8} style={{height:84, flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>

                        <Ionicons name='arrow-back' style={{fontSize:20, color:'#FFFFFF'}} />

                        <Text style={{fontSize:16, color:'#FFF', fontWeight:'600'}}>BACK</Text>

                    </TouchableOpacity>

                </View>

            </View>

        );
    }
}