import {showMessage} from 'react-native-flash-message';
import UStyle from './UStyle';
import UColor from './UColor';

export default class UToast {
  /**
   *
   * @param text
   * @param timeout
   * @returns {Promise<void>}
   */
  static unitToast = (text = 'no content', timeout = 3000) => {
    showMessage({
      message: text,
      type: 'default',
      backgroundColor: UColor.toastColor, // background color
      color: UColor.textCardColor, // text color
      duration: timeout,
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: UStyle.deviceWidth/4,
      },
      position: {bottom: 10, left: UStyle.deviceWidth/2.5},
      floating: true,
      titleStyle: {
        fontSize: 16,
      }
    });
  };
}
