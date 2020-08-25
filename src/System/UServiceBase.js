import axios from 'axios';
import UConfig from './UConfig';

export default class ServiceBase {
  /**
   * requestConfig
   * @type {{headers: {"Content-Type": string}}}
   */
  static requestConfig = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  /**
   * url
   * @param endPoint
   * @returns {string}
   */
  static url = (endPoint = 'NA') => {
    return `${UConfig.urlAPI}${endPoint}`;
  };

  /**
   *
   * @param url
   * @param data
   * @param cb
   * @param params
   * @param requestConfig
   * @param goToLoginWhenHasErrorAuthen
   */
  static post = (
    url,
    data,
    cb,
    params,
    requestConfig = ServiceBase.requestConfig,
    goToLoginWhenHasErrorAuthen = true,
  ) => {
    if (params) requestConfig.params = params;

    axios
      .post(url, data, requestConfig)
      .then((res) => {
        UConfig.debugMode && console.log(url, data, requestConfig, res);

        cb && cb(true, res);
      })
      .catch((error) => {
        UConfig.debugMode && console.warn(url, data, requestConfig, error);

        cb && cb(false, error);

        if (
          goToLoginWhenHasErrorAuthen &&
          error.response &&
          error.response.status === 401
        )
          // Token het han, yc login lai
          () => {};
      });
  };

  /**
   *
   * @param url
   * @param data
   * @param cb
   * @param params
   * @param requestConfig
   * @param goToLoginWhenHasErrorAuthen
   */
  static put = (
    url,
    data,
    cb,
    params,
    requestConfig = ServiceBase.requestConfig,
    goToLoginWhenHasErrorAuthen = true,
  ) => {
    if (params) requestConfig.params = params;

    axios
      .put(url, data, requestConfig)
      .then((res) => {
        UConfig.debugMode && console.log(url, data, requestConfig, res);

        cb && cb(true, res);
      })
      .catch((error) => {
        UConfig.debugMode && console.warn(url, data, requestConfig, error);

        cb && cb(false, error);

        if (
          goToLoginWhenHasErrorAuthen &&
          error.response &&
          error.response.status === 401
        )
          // Token het han, yc login lai
          () => {};
      });
  };

  /**
   *
   * @param url
   * @param data
   * @param cb
   * @param params
   * @param requestConfig
   * @param goToLoginWhenHasErrorAuthen
   */
  static patch = (
    url,
    data,
    cb,
    params,
    requestConfig = ServiceBase.requestConfig,
    goToLoginWhenHasErrorAuthen = true,
  ) => {
    if (params) requestConfig.params = params;

    axios
      .patch(url, data, requestConfig)
      .then((res) => {
        UConfig.debugMode && console.log(url, data, requestConfig, res);

        cb && cb(true, res);
      })
      .catch((error) => {
        UConfig.debugMode && console.warn(url, data, requestConfig, error);

        cb && cb(false, error);

        if (
          goToLoginWhenHasErrorAuthen &&
          error.response &&
          error.response.status === 401
        )
          // Token het han, yc login lai
          () => {};
      });
  };

  /**
   *
   * @param url
   * @param cb
   * @param params
   * @param requestConfig
   * @param goToLoginWhenHasErrorAuthen
   */
  static get = (
    url,
    cb,
    params,
    requestConfig = ServiceBase.requestConfig,
    goToLoginWhenHasErrorAuthen = true,
  ) => {
    if (params) requestConfig.params = params;

    axios
      .get(url, requestConfig)
      .then((res) => {
        UConfig.debugMode && console.log(url, requestConfig, res);

        cb && cb(true, res);
      })
      .catch((error) => {
        UConfig.debugMode && console.warn(url, requestConfig, error.response);

        cb && cb(false, error);

        if (
          goToLoginWhenHasErrorAuthen &&
          error.response &&
          error.response.status === 401
        )
          // Token het han, yc login lai
          () => {};
      });
  };

  /**
   *
   * @param url
   * @param cb
   * @param params
   * @param requestConfig
   * @param goToLoginWhenHasErrorAuthen
   */
  static delete = (
    url,
    cb,
    params,
    requestConfig = ServiceBase.requestConfig,
    goToLoginWhenHasErrorAuthen = true,
  ) => {
    if (params) requestConfig.params = params;

    axios
      .delete(url, requestConfig)
      .then((res) => {
        UConfig.debugMode && console.log(url, requestConfig, res);

        cb && cb(true, res);
      })
      .catch((error) => {
        UConfig.debugMode && console.warn(url, requestConfig, error);

        cb && cb(false, error);

        if (
          goToLoginWhenHasErrorAuthen &&
          error.response &&
          error.response.status === 401
        )
          // Token het han, yc login lai
          () => {};
      });
  };
}
