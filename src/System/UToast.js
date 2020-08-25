import {showMessage} from 'react-native-flash-message';

export default class UToast {
  /**
   *
   * @param text
   * @param timeout
   * @returns {Promise<void>}
   */
  static toast = (text = 'no content', timeout = 3000) => {
    showMessage({
      message: text,
      type: 'default',
      backgroundColor: '#ACF5BE', // background color
      color: '#3F4246', // text color
      duration: timeout,
      style: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 400,
      },
      position: {bottom: 10, left: 400},
      floating: true,
    });
  };
}
