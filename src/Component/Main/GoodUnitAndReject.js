import React, {Component} from 'react';
import {View} from 'react-native';
import moment from 'moment';
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

    constructor(props) {
        super(props);
        this.state = {
          idleStart: Date.now(),
        };
      }
    
      componentDidMount() { 
        this.wasActive = false;
        this.active = true;
        if (this.props.isActive) {
          this.wasActive = true;
          this.activated();
        }
      }
      componentWillUnmount() {
        this.disabled();
      }
    
      componentDidUpdate() {
        if (this.props.isActive) {
          if (!this.wasActive) {
            this.wasActive = true;
            this.activated();
          }
        } else if (this.wasActive) {
          this.wasActive = false;
          this.disabled();
        }
      }
    
      activated = () => {
        if (!this.timer) {
          this.timer = setInterval(() => this.checkIdle(), 1000);
          this.setState({idleStart: Date.now()});
        }
      };
    
      disabled = () => {
        if (this.timer) {
          clearInterval(this.timer);
          this.timer = null;
        }
      };

      handleAddUnit = () => {
        this.setState({ idleStart: Date.now()})
        R.toast.unitToast('1000 good units added', 3000)
      }
    
      checkIdle = () => {
        const startTime = moment(this.state.idleStart);
        const now = moment(Date.now());
        const diff = now.diff(startTime, 'seconds');
        const idleTimeout = 5000;
        console.log('diff', diff);
        if (this.props.isActive && diff > idleTimeout) {
          this.props.navigation.navigate('everything', { goToPage: this.props.goToPage  });
        }
      };
    


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
                        onPress={this.handleAddUnit}
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
