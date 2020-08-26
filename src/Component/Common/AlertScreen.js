import React, {Component} from 'react';
import {View, Text} from 'react-native';


/**
 * props:{}
 * state:{}
 */
class AlertScreen extends Component {

    render(){

        return(

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFF', paddingHorizontal:50}}>

                <Text>Alert</Text>

            </View>
        );
    }
}

export {AlertScreen}