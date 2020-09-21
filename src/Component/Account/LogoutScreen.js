import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import R from '../R';
import { Header } from '../Common/Header';
import { CButton } from '../Common/Selector';


/**
 * props:{}
 * state:{}
 */
class LogoutScreen extends Component {

    constructor(props){
        super(props);

        // this.state = {

        //     showDevice:false,
        // };
    }


    /**
     * 
     */
    // handleShowDevice = () => {
    //     this.setState({showDevice:!this.state.showDevice})
    // };


    render(){

        // const {showDevice} = this.state;

        const {navigation} = this.props;

        return(<>

            <Header onPressLogout={()=>navigation.navigate('logout')} />

            <View style={{flex:1, paddingHorizontal:50, justifyContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.6)'}}>
                
                <View style={{width:200, position:'absolute', right:50, top:0, backgroundColor:'#FFFFFF', borderWidth:1, borderColor:'#DBE2E8', borderRadius:8, ...R.Style.shadowModal}}>

                    <TouchableOpacity activeOpacity={0.8} onPress={this.handleShowDevice}>
                        <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24, marginVertical:20, marginLeft:28}}>Replace this device</Text>
                    </TouchableOpacity>
                    
                    <View style={{height:1, backgroundColor:'#DBE2E8'}} />
                    
                    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.goBack()}>
                        <Text style={{fontSize:16, color:'#3F4246', fontWeight:'500', lineHeight:24, marginVertical:20, marginLeft:28}}>Logout</Text>
                    </TouchableOpacity>
                
                </View>
                
                <View style={{
                            width: 0,
                            height: 0,
                            borderLeftWidth: 8,
                            borderRightWidth: 8,
                            borderBottomWidth: 8,
                            borderStyle: 'solid',
                            backgroundColor: 'transparent',
                            borderLeftColor: 'transparent',
                            borderRightColor: 'transparent',
                            borderBottomColor: '#FFFFFF', 
                            position:'absolute', 
                            right:142, 
                            top:-7
                        }} 
                />

                {/* {showDevice?<View style={{flex:1, width:578, marginVertical:50, backgroundColor:'#FFFFFF', borderRadius:8, ...R.Style.shadow}}>

                    <View style={{flex:310, alignItems:'center'}}>

                    </View>

                    <View style={{width:'100%', height:1, backgroundColor:'#CAD3DB'}} />
                    
                    <View style={{flex:180}}>

                    </View>

                    <View style={{width:'100%', height:1, backgroundColor:'#CAD3DB'}} />
                    
                    <View style={{flex:108, backgroundColor:'#F3F5F7'}}>

                    </View>

                    <View style={{width:'100%', height:1, backgroundColor:'#CAD3DB'}} />
                    
                    <View style={{paddingVertical:30, paddingHorizontal:200}}>

                        <CButton
                            onPress={()=>navigation.goBack()}
                            color='#2C2C2C'
                            marginTop={0} 
                            buttonName='Cancel' 
                            backgroundColor='#FFFFFF' 
                            borderColor='#DBE2E8' 
                        />

                    </View>

                </View>:null} */}

            </View>

        </>);
    }
}

export {LogoutScreen}