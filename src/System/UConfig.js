export default class UConfig {
  /**
   *
   * @type {boolean}
   */
  static prodMode = false; // IMPORTANCE, switch development or production to get data

  /**
   *
   * @type {boolean}
   */
  static debugMode = false; // DEBUG mode, apply the DevelopmentOnly component

  /**
   *
   * @type {string}
   */
  // static urlLoginNavigationAPI;
  static urlLoginNavigationAPI = UConfig.prodMode ? '' : '';

  /**
   *
   * @type {string}
   * @private
   */
  static _urlAPI = '';

  /**
   * Get gateway API url, url same as ''. Data returned:
   * '': Request get url at login navigation
   *
   * @returns {*}
   */
  static get urlAPI() {
    return UConfig._urlAPI;
  }
}
