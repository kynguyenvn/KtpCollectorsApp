import React, {Component} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';
import { TouchableOpacity, TextInput, ScrollView } from 'react-native-gesture-handler';
import R from '../R';
import { CButton } from '../Common/Selector';


/**
 * props:{}
 * state:{
 *          linkKey:''
 * }
 */
export default class LinkScreen extends Component {

    constructor(props){
        super(props);

        this.state = {
            
            linkKey:''

        };
    }


    /**
     * 
     */
    render(){

        const {linkKey} = this.state;

        const {navigation} = this.props;

        return(

            <View style={{flex:1, backgroundColor:'#00538B'}}>

                <View style={{width:60, height:79, backgroundColor:'#FFF', marginLeft:30, marginTop:30, position:'absolute', zIndex:1}} />
                
                <KeyboardAvoidingView {...R.Style.behaviorKeyboardAvoidingView} enabled style={{flex:1, flexDirection:'row', alignItems: 'center'}} >
                    
                    <ScrollView contentContainerStyle={{alignItems:'center', backgroundColor:'transparent'}}
                                showsVerticalScrollIndicator={false}>
                
                        <View style={{width:484, paddingHorizontal:50, paddingBottom:50, paddingTop:60, backgroundColor:'#FFF', borderRadius:8, ...R.Style.shadow}}>
                                
                            <View style={{alignItems:'center'}}>
                                    
                                <View style={{width:170, height:170, backgroundColor:'#00538B'}} />

                                <Text style={{fontSize:20, color:'#2C2C2C', fontWeight:'600', marginTop:38}}>WELCOM TO KT-PULSE</Text>

                                <Text style={{fontSize:16, color:'#2C2C2C', marginTop:10}}>Enter the Link Key below to get started</Text>

                            </View>
                                
                            <TextInput 
                                style={{height:50, fontSize:16, paddingLeft:15, marginTop:20, borderWidth:1, borderColor:'#DBE2E8', borderRadius:2}} 
                                placeholder='Link key is...' 
                                placeholderTextColor='#6B7B8B' 
                                keyboardType={'default'}
                                returnKeyType={'done'}
                                value={linkKey}
                                onChangeText={linkKey => this.setState(linkKey)}
                            />
                                
                            <CButton buttonName='Link now' marginTop={20} />

                        </View>

                    </ScrollView>
                    
                </KeyboardAvoidingView>
                
                <View style={{borderTopWidth:1, borderTopColor:'rgba(219,226,232,0.1)'}}>

                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()} style={{height:84, flexDirection: 'row', alignItems:'center', justifyContent:'center'}}>

                        <Text style={{marginRight:15, color:'#FFF'}}>{'<--'}</Text>

                        <Text style={{fontSize:16, color:'#FFF', fontWeight:'600'}}>BACK</Text>

                    </TouchableOpacity>

                </View>

            </View>

        );
    }
}