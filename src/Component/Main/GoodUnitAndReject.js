import React, {Component} from 'react';
import {View} from 'react-native';
import R from '../R';
import { General } from '../Common/Selector';
import {Hourly} from '../Common/Hourly';
import {Shift} from '../Common/Shift';
import {DigitsCard, GoodUnitAndRejectItem} from './MainElements';



/**
 * props:{}
 * state:{}
 */
class GoodUnitAndReject extends Component {

    render(){

        const {navigation} = this.props;

        return(

            <General>
                
                <View style={{flex:1}}>
                    
                    <Shift shift={this.props.shift} currentTime={this.props.currentTime} />
                    
                    <Hourly minuteMark={this.props.minuteMark}  />

                </View>

                <View style={{flex:2, flexDirection:'row'}}>

                    <GoodUnitAndRejectItem 
                        title='Good' 
                        isButtonNetwork 
                        onPressNumpad={()=>navigation.navigate('numpad', {title:'GOOD'})}
                        onPress={()=> R.toast.unitToast('1000 good units added', 3000)}
                    >
                        <DigitsCard unitCount={150}/>

                    </GoodUnitAndRejectItem>

                    <View style={{width:30}} />

                    <GoodUnitAndRejectItem 
                        title='Reject' 
                        backgroundColor='#FA6348' 
                        isReject
                        onPressNumpad={()=>navigation.navigate('numpad', {title:'REJECT'})}
                        onPress={()=>navigation.navigate('reason')}
                    >
                        <DigitsCard unitCount={3}/>

                    </GoodUnitAndRejectItem>

                </View>

            </General>
        );
    }
}


export {GoodUnitAndReject}
