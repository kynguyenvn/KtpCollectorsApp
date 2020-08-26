import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import R from '../R';


/**
 * props:{}
 * state:{}
 */
class GoodUnitAndReject extends Component {

    render(){

        return(

            <View style={{flex: 1, flexDirection:'row', alignItems: 'center', backgroundColor:'#FFF', paddingHorizontal:50}}>

                <ScrollView horizontal={true}>

                    <View style={{padding:30, backgroundColor:'#F3F5F7', borderWidth:1, borderColor:'#CAD3DB', borderRadius:3}}>

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

                            <TouchableOpacity activeOpacity={0.8} style={{width:60, height:60, borderRadius:30, backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                            <Text style={{fontSize:30, fontWeight:'700'}}>GOOD</Text>

                            <TouchableOpacity activeOpacity={0.8} style={{width:60, height:60, borderRadius:30, backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                        </View>

                        <View style={{flexDirection:'row', marginTop:30}}>

                            <Text style={{padding:44, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', fontSize:80}}>1</Text>
                            <Text style={{padding:44, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', marginLeft:15, fontSize:80}}>5</Text>
                            <Text style={{padding:44, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', marginLeft:15, fontSize:80}}>0</Text>

                        </View>

                    </View>

                    <View style={{width:22}} />

                    <View style={{padding:30, backgroundColor:'#F3F5F7', borderWidth:1, borderColor:'#CAD3DB', borderRadius:3}}>

                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>

                            <TouchableOpacity activeOpacity={0.8} style={{width:60, height:60, borderRadius:30, backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                            <Text style={{fontSize:30, fontWeight:'700'}}>REJECT</Text>

                            <TouchableOpacity activeOpacity={0.8} style={{width:60, height:60, borderRadius:30, backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'#DBE2E8', ...R.Style.shadowIcon}} />

                        </View>

                        <View style={{flexDirection:'row', marginTop:30}}>

                            <Text style={{padding:44, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', fontSize:80}}>0</Text>
                            <Text style={{padding:44, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', marginLeft:15, fontSize:80}}>0</Text>
                            <Text style={{padding:44, backgroundColor:'#FFF', borderWidth:1, borderColor:'#DBE2E8', marginLeft:15, fontSize:80}}>3</Text>

                        </View>

                    </View>

                </ScrollView>

            </View>
        );
    }
}

export {GoodUnitAndReject}