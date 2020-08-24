import React, {Component} from 'react';
import {View, Text} from 'react-native';

/**
 * props:{}
 * state:{}
 */
class Header extends Component {

    constructor(props){
        super(props);
    }

    /**
     * 
     */
    render(){

        return(

            <View style={{flex:1}}>

                <Text>Header</Text>

            </View>
        
        );
    }
}

export {
    Header
}