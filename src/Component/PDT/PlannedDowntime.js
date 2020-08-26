import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';


/**
 * props:{}
 * state:{}
 */
class PlannedDowntime extends Component {

    render(){

        const {goBack=()=>{}} = this.props;

        return(

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'#FFF', paddingHorizontal:50}}>

                <Text>PlannedDowntime</Text>

                <TouchableOpacity activeOpacity={0.8} onPress={goBack}>
                    <Text>Go back Default</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

export {PlannedDowntime}