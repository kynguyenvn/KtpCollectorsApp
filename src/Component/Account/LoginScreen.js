import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StatusBar, KeyboardAvoidingView} from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import { CButton } from '../Common/Selector';
import R from '../R';


/**
 * props: {
 *          navigation,
 * }
 * 
 * state:{
 *          email:'',
 *          password:''
 * 
 * }
 */
export default class LoginScreen extends Component {


    constructor(props){
        super(props);

        this.state = {

            email:'',
            password:''

        };
    }
    

    /**
     * 
     */
    render(){

        const {email, password} = this.state;

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

                <View style={{flex:884, backgroundColor:'#00538B', justifyContent:'center', alignItems: 'center'}}>

                  {/* <KeyboardAvoidingView behavior='padding' enabled style={{flex:1}} > */}
                    
                      {/* <ScrollView contentContainerStyle={{ alignItems: 'center', backgroundColor:'transparent'}} */}
                          {/* showsVerticalScrollIndicator={false}> */}

                          {/* <View style={{height:'50%'}} /> */}

                          <View style={{width:484, padding: 50, backgroundColor:'#FFF', borderRadius: 8, ...R.Style.shadow}}>

                              <Text style={{fontSize:13, color:'#2C2C2C', lineHeight:21}}>USER ID</Text>

                              <TextInput 
                                  style={{height:50, fontSize:16, paddingLeft:15, marginTop:10, borderWidth:1, borderColor:'#DBE2E8', borderRadius:2}} 
                                  placeholder='Enter...' 
                                  placeholderTextColor='#6B7B8B' 
                                  textContentType={'emailAddress'}
                                  keyboardType={'email-address'}
                                  returnKeyType={'next'}
                                  value={email}
                                  onChangeText={email => this.setState({ email })}
                                  onSubmitEditing={() => { this.passwordTextInput.focus(); }}
                              />

                              <Text style={{fontSize:13, color:'#2C2C2C', lineHeight:21, marginTop:30}}>PASSWORD</Text>

                              <TextInput 
                                  ref={(input) => { this.passwordTextInput = input; }}
                                  style={{height:50, fontSize:16, paddingLeft:15, marginTop:10, borderWidth:1, borderColor:'#DBE2E8', borderRadius:2}} 
                                  placeholder='&#8226;&#8226;&#8226;&#8226;&#8226;' 
                                  placeholderTextColor='#6B7B8B'
                                  textContentType={'password'}
                                  returnKeyType={'done'}
                                  value={password}
                                  onChangeText={password => this.setState({ password })} 
                              />

                              <CButton buttonName='Sign in' onPress={()=>navigation.navigate('main')} />

                          </View>

                      {/* </ScrollView> */}
                  
                  {/* </KeyboardAvoidingView> */}

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
const CDataLink = ({label='', isMarginTopLink=false, dataLink=''}) => {

    return <View style={{marginTop:isMarginTopLink?20:null}}>

        <Text numberOfLines={1} style={{fontSize:13, color:'#6B7B8B'}}>{label}</Text>

        <Text style={{fontSize:16, color:'#2C2C2C', fontWeight:'600', marginTop:3}}>{dataLink||'N/A'}</Text>

    </View>
};