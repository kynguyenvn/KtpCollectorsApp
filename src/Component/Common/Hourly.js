import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ProgressBar} from '../Main/MainElements';
import R from '../R';

/**
 * props:{minuteMark}
 * state:{}
 */
class Hourly extends Component {

    constructor(props){
        super(props);
    }

       /**
     * 
     */

    handleHourly = () => {
        return ((this.props.minuteMark/60)*100)
    }

    render(){

        return(
       <ProgressBar
       style={{marginBottom: 40, marginTop: 20}}
       name={'Hourly'}
       currentAmount={'12'}
       targetAmount={'220'}
       >
          <View style={{ position: 'absolute', left: `${this.handleHourly()}%`, height:40, width: 5, backgroundColor: R.C.ktpColors}}></View>
           
          <Text style={{position: 'absolute', left: `${this.handleHourly() - 0.5}%`, bottom: -20,}}>{this.props.minuteMark}</Text>

       </ProgressBar>
          
        );
    }
}

export {Hourly}

