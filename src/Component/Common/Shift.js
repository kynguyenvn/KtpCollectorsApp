import React, {Component} from 'react';
import { View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import R from '../R';
import {ProgressBar} from '../Main/ProgressBar';

const SHIFT_STATUS = ['success', 'fail', 'success', 'success', 'fail', 'onGoing', 'upComing', 'upComing', 'upComing', 'upComing', 'upComing','upComing'];

/**
 * props:{}
 * state:{}
 */
class Shift extends Component {
  constructor(props) {
    super(props);
  }

  handleTargetPercentage = () =>{
    const { shift, currentTime} = this.props;
    const startHour = new Date(shift.start).getHours();
    const endHour = new Date(shift.end).getHours();
    let currentHour = new Date(currentTime).getHours();
    if(currentHour < startHour){
      currentHour = new Date(currentTime).getHours() + 7; 
    }
    const currentMinute = new Date(currentTime).getMinutes();
    const shiftTime = (endHour - startHour)*60;
    const elapsedTime = (currentHour - startHour)*60  + currentMinute;
    return `${(elapsedTime/shiftTime)*100}%`
  }
  render() {

    return (
     <ProgressBar
     name={'Shift'}
     currentAmount={'220'}
     targetAmount={'4080'}
     >
       {SHIFT_STATUS.map((item, index) => (
          <HourBars hourStatus={item} i={index} key={index} />
        ))}
        <View style={{ position: 'absolute', left: this.handleTargetPercentage(), height:40, width: 5, backgroundColor: R.C.ktpColors}}></View>
     </ProgressBar>
    );
  }
}

/**
 * @param hourStatus
 * @param i
 */

const HourBars = ({hourStatus, i}) => {
  let hourBar;
  let position;
  if (i === 0) {
    position = 'first';
  } else if (i === SHIFT_STATUS.length - 1) {
    position = 'last';
  }
  const index = i;

  switch (hourStatus) {
    case 'success':
      hourBar = <HourBar key={index} status={'success'} position={position} />;
      break;
    case 'fail':
      hourBar = <HourBar key={index} status={'fail'} position={position} />;
      break;
    case 'onGoing':
      hourBar = <HourBar key={index} status={'onGoing'} position={position} />;
      break;
    case 'upComing':
      hourBar = <HourBar key={index} status={'upComing'} position={position} />;
      break;
    default:
      break;
  }

  return hourBar;
};

/**
 * @param status
 * @param position
 * @param key
 */
const HourBar = ({status, position, key}) => {
  let color;
  let icon;
  let colorBorder;
  switch (status) {
    case 'success':
      color = R.C.gradientSuccessColor;
      icon = 'checkmark-outline';
      colorBorder = R.C.borderShiftFull;
      break;
    case 'fail':
      color = R.C.gradientFailColor;
      icon = 'close-outline';
      colorBorder =  R.C.borderShiftFull;
      break;
    case 'onGoing':
      color = R.C.gradientProgressColor;
      colorBorder = R.C.borderShiftLess;
      break;
    case 'upComing':
        colorBorder = R.C.borderShiftLess;
        color = R.C.gradientBackgroundProgress;
    default:
        colorBorder = R.C.borderShiftLess;
      break;
  }
  return (
    <LinearGradient
      key={key}
      colors={color}
      style={{ flex: 1,height: 30,justifyContent: 'center',alignItems: 'center',borderColor: colorBorder,borderWidth: 0.5,borderBottomLeftRadius: position === 'first' ? 20 : null, borderTopLeftRadius: position === 'first' ? 20 : null, borderBottomRightRadius: (position === 'last' || status === 'onGoing') ? 20 : null,borderTopRightRadius: (position === 'last' || status === 'onGoing') ? 20 : null,}}>
      <Ionicons
        name={icon}
        size={18}
        color={R.C.whiteColor}
        style={{fontWeight: 'bold'}}
      />
    </LinearGradient>
  );
};

export {Shift};
