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
        justifyContent:'center',
        alignItems:'center',
        paddingVertical: 16,
        marginHorizontal:(UStyle.deviceWidth-229)/2,
        // maxWidth:249,
        borderRadius:3,
        ...UStyle.shadowToast
      },
      position: {bottom:28},
      // floating: true,
      titleStyle: {
        fontSize: 16,
      }
    });
  };
}
