import AsyncStorage from '@react-native-async-storage/async-storage';
import {API_URL} from '../../config';
import {APIClient, setAuthorization} from './api_helper';
import * as url from './url_helper';

const api = new APIClient();

export const getLoggedInUser = async () => {
  let LoginDataToken = await AsyncStorage.getItem('access_token');

  console.log('LoginDataToken========', LoginDataToken);
  if (LoginDataToken) {
    setAuthorization(LoginDataToken);
    return LoginDataToken;
  }
  return null;
};

export const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

export const getsecurityquestionapi = rqeuserdata =>
  api.get(url.SECURITY_QUESTION_API, rqeuserdata);

export const loginapi = rqeuserdata => api.create(url.LOGIN_API, rqeuserdata);
export const checkUsernameapi = rqeuserdata =>
  api.create(url.CHECK_USERNAME_API, rqeuserdata);
export const getLoginPageapi = rqeuserdata =>
  api.get(url.GET_LOGIN_PAGE_API, rqeuserdata);
export const getDashboardApi = rqeuserdata =>
  api.get(url.GET_DASHBOARD_API, rqeuserdata);
export const getEmpTrainingApi = rqeuserdata =>
  api.get(url.GET_EMP_TRAINING, rqeuserdata);
export const getTrainingMaterialApi = rqeuserdata =>
  api.get(url.GET_TRAINING_MATERIAL_API, rqeuserdata);
export const insertTrainingMaterialApi = rqeuserdata =>
  api.create(url.INSERT_TRAINING_MATERIAL_API, rqeuserdata);
export const insertUserTrainingPerformApi = rqeuserdata =>
  api.create(url.INSERT_USER_TRAINING_PERFORM_API, rqeuserdata);

export const getTrainingEvalutionApi = rqeuserdata =>
  api.get(url.GET_TRAINING_EVALUTION_API, rqeuserdata);
export const saveEvalutionQueApi = rqeuserdata =>
  api.create(url.SAVE_EVALUTION_QUE_API, rqeuserdata);

export const checkPasswordApi = rqeuserdata =>
  api.create(url.CHECK_PASSWORD_API, rqeuserdata);
export const getTrainingResultApi = rqeuserdata =>
  api.get(url.GET_TRAINING_RESULT_API, rqeuserdata);

export const editProfileApi = rqeuserdata =>
  api.create(url.EDIT_PROFILE_API, rqeuserdata);

export const getProfileInfoApi = rqeuserdata =>
  api.get(url.GET_PROFILE_INFO_API, rqeuserdata);
export const getEmployeeTrainingExpiryApi = rqeuserdata =>
  api.get(url.GET_EMPLOYEE_TRAINING_EXPIRY_API, rqeuserdata);

export const autoscreenlockapi = rqeuserdata =>
  api.create(url.AUOT_SCREEN_LOCK, rqeuserdata);
export const manualscreenlockapi = rqeuserdata =>
  api.create(url.MANUAL_SCREEN_LOCK, rqeuserdata);
export const manuallogoutapi = rqeuserdata =>
  api.create(url.MANUAL_LOG_OUT, rqeuserdata);
export const autologoutapi = rqeuserdata =>
  api.create(url.AUTO_LOGOUT, rqeuserdata);
