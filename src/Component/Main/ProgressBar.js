import React, {Component} from 'react';
import {View, Text} from 'react-native';
import R from '../R';
import LinearGradient from 'react-native-linear-gradient';

/**
 * props:{}
 * state:{}
 */
class ProgressBar extends Component {

    constructor(props){
        super(props);
    }

     

    render(){
        const { name, targetAmount, currentAmount} = this.props;

        return(
        <View style={{ flex: 1, flexDirection: 'row', marginVertical: 20,height: 30,justifyContent: 'center', alignItems: 'center'}}>  
        
         <View style={{ width: 50}}>
             <Text style={{color: R.C.textCardColor, fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
         </View>

         <LinearGradient 
         colors={R.C.gradientBackgroundProgress} 
         style={{flex: 1, height: 30, flexDirection: 'row', borderRadius: 20, marginHorizontal: 20, justifyContent: 'center', alignItems: 'center', ...R.C.shadow}}>

         {this.props.children}
          
         </LinearGradient>

         <View style={{flexDirection: 'row', width: 80, justifyContent: 'flex-end'}}>
             <Text style={{color: R.C.numberProgressColor, fontSize: 16, fontWeight: 'bold'}}>{currentAmount}</Text>
             <Text style={{color: R.C.textCardColor, fontSize: 16, fontWeight: 'bold'}}>{`/${targetAmount}`}</Text>
         </View>

         </View> 
          
        );
    }
}

export {ProgressBar}