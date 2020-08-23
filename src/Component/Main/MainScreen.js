import React, {Component} from 'react';
import {Text, SafeAreaView} from 'react-native';


/**
 * props:{}
 * 
 * state:{}
 */
export default class MainScreen extends Component {

    constructor(props){
        super(props);
    }

    /**
     * 
     */
    render(){

        return(

            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <Text>Main Screen</Text>

            </SafeAreaView>

        );
    }
}
