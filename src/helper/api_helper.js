import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config';
// default

axios.defaults.baseURL = config.API_URL.API_URL;
// content type

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
// intercepting to capture errors

axios.interceptors.response.use(
  async function (response) {
    // const token =  await AsyncStorage.getItem("LoginDataToken");
    //response.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9rYXJtYWJlZXMuY2xpbmljYWxjYXJlLmluXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjc2ODg5MTM0LCJleHAiOjE2ODQ2NjUxMzQsIm5iZiI6MTY3Njg4OTEzNCwianRpIjoiQk5KSlk1WjFQVHA1SURjWSIsInN1YiI6MTA4LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.h59svqTLpeuu4EIUsTP2QUMdML4krQIphWIxepjJ7aI`;
    // console.log("Sa here", response)
    return response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    let message;
    switch (error.status) {
      case 500:
        message = 'Internal Server Error';
        break;
      case 401:
        message = 'Invalid credentials';
        break;
      case 404:
        message = 'Sorry! the data you are looking for could not be found';
        break;
      default:
        message = error.message || error;
    }
    return Promise.reject(message);
  },
);
/**
 * Sets the default authorization
 * @param {*} token
 */
const setAuthorization = token => {
  console.log('==================== token ========================', token);

  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
};

class APIClient {
  get = (url, params) => {
    let response;

    let paramKeys = [];

    if (params) {
      Object.keys(params).map(key => {
        paramKeys.push(key + '=' + params[key]);
        return paramKeys;
      });

      const queryString =
        paramKeys && paramKeys.length ? paramKeys.join('&') : '';
      response = axios.get(`${url}?${queryString}`, params);
    } else {
      response = axios.get(`${url}`, params);
    }

    return response;
  };
  /**
   * post given data to url
   */
  create = (url, data) => {
    return axios.post(url, data);
  };
  /**
   * Updates data
   */
  update = (url, data) => {
    return axios.put(url, data);
  };
  /**
   * Delete
   */
  delete = (url, config) => {
    return axios.delete(url, {...config});
  };
}

export {APIClient, setAuthorization};
