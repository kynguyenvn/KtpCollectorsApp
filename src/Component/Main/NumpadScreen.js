import React, {Component} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import R from '../R';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DigitsCard } from './MainElements';



/**
 * props:{
 *          navigation
 * }
 * state:{
 *          number:''
 * }
 */
class NumpadScreen extends Component {

    constructor(props){
        super(props);

        this.state = {

            number:''
        };
    }

    render(){

        const {number} = this.state;

        const {navigation, route} = this.props;

        const title = route.params?route.params.title:'';

        return(

            <View style={{flex:1, flexDirection:'row', alignItems:'center', backgroundColor:'rgba(0,0,0,0.6)', paddingHorizontal:50, paddingTop:74, paddingBottom:74}}>

                <View style={{flex:1, flexDirection:'column', backgroundColor:'#FFFFFF', borderRadius:8, overflow:'hidden', ...R.Style.shadowModal}}>

                    <View style={{height:74, flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#00538B', borderTopLeftRadius:8, borderTopRightRadius:8}}>

                        <Text style={{fontSize:20, color:'#FFF', fontWeight:'600', lineHeight:30, marginLeft:30}}>ENTER NUMBER OF UNITS</Text>
                    
                        <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()} style={{height:60, width:66, justifyContent:'center', alignItems:'center'}}>
                            
                            <Ionicons name='close' style={{fontSize:28, color:'#FFFFFF'}} />
                        
                        </TouchableOpacity>

                    </View>

                    <View style={{flexDirection:'row', backgroundColor:'#F3F5F7'}}>

                        <View style={{flex:1, paddingHorizontal:30, paddingTop:30, paddingBottom:50}}>

                            <Text style={{fontSize:30, color:'#3F4246', fontWeight:'700', lineHeight:40, textAlign:'center'}}>{title}</Text>

                            <DigitsCard unitCount={0} isFlex style={{height:150}} />

                        </View>

                        <View style={{width:1, backgroundColor:'#CAD3DB'}} />

                        <View style={{flex:1, paddingHorizontal:60, paddingTop:30, paddingBottom:50}}>

                            <Text style={{fontSize:30, color:'#3F4246', fontWeight:'700', lineHeight:40, textAlign:'center'}}>Specify Number of Units</Text>

                            <Text style={{fontSize:30, color:'#3F4246', lineHeight:50, textAlign:'center'}}>Between 1000 and 3360</Text>

                            <TextInput
                                style={{flex:1, fontSize:60, color:'#58616A', textAlign:'center'}}
                                autoFocus={true}
                                keyboardType='numeric'
                                value={number}
                                onChangeText={number=>this.setState({number})}
                            />

                            <View style={{height:5, backgroundColor:'#CAD3DB', borderRadius:2}} />

                        </View>

                    </View>

                </View>

            </View>
        );
    }
}


export {NumpadScreen}