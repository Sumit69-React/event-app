import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Divider, TextInput} from 'react-native-paper';

import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {login, resetLoginCode} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNRestart from 'react-native-restart';

const Login = props => {
  const {navigation} = props;
  const dispatch = useDispatch();

  const {loginData, loginMsg, loginCode} = useSelector(state => ({
    loginData: state.loginreducer.loginData,
    loginMsg: state.loginreducer.loginMsg,
    loginCode: state.loginreducer.loginCode,
  }));

  useEffect(() => {
    const loginfun = async () => {
      if (loginCode == false && loginMsg) {
        ToastAndroid.show(loginMsg.toString(), ToastAndroid.SHORT);
        dispatch(resetLoginCode());
      } else if (loginCode == true && loginMsg) {
        ToastAndroid.show(loginMsg.toString(), ToastAndroid.SHORT);

        await AsyncStorage.setItem(
          'LOGIN_DATA',
          JSON.stringify(loginData.user),
        );
        await AsyncStorage.setItem('userActive', '1');
        await AsyncStorage.setItem('screenName', 'home');
        console.log('loginData.access_token====', loginData.token);
        await AsyncStorage.setItem('access_token', loginData.token);

        RNRestart.restart();
        dispatch(resetLoginCode());
      }
    };
    loginfun();
  }, [loginCode]);

  console.log('loginCode=========', loginCode);
  console.log('loginData=========', loginData);
  console.log('loginMsg=========', loginMsg);

  const [passwordEye, setpasswordEye] = useState(true);

  const handlePassEye = () => {
    setpasswordEye(!passwordEye);
  };

  const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');

  const [emailError, setemailError] = useState('');
  const [passwordError, setpasswordError] = useState('');
  const [isClick, setisClick] = useState(0);

  const handleemail = e => {
    setEmail(e);
    if (e.trim() !== '') setemailError('');
  };

  const handlePass = e => {
    setPassword(e);
    if (e.trim() !== '') setpasswordError('');
  };

  const handleLogin = () => {
    let valid = true;
    if (email.trim() === '') {
      setemailError('Email is required');
      valid = false;
    }
    if (password.trim() === '') {
      setpasswordError('Password is required');
      valid = false;
    }
    if (!valid) return;

    setisClick(1);

    let reqdata = {
      email: email,
      password: password,
      platform: 'app',
    };
    dispatch(login(reqdata));
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>Pliē</Text>

      {/* Placeholder for an image */}
      <View style={styles.imageContainer}>
        <MaterialIcons name="image-outline" size={40} color="black" />
      </View>

      <View
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'white',
          padding: 20,
          justifyContent: 'space-between',
          paddingBottom: 10,
        }}>
        <View>
          {/* Email Input */}
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="email@email.com"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            cursorColor="black"
            activeOutlineColor="white"
            mode="outlined"
            outlineColor="white"
            onChangeText={e => handleemail(e)}
            value={email}
          />
          {emailError ? (
            <Text style={styles.errorText}>{emailError}</Text>
          ) : null}

          <Text style={styles.inputLabel}>Password</Text>
          {/* Password Input */}
          <TextInput
            style={styles.input}
            placeholder="Password"
            cursorColor="black"
            activeOutlineColor="white"
            mode="outlined"
            outlineColor="white"
            right={
              <TextInput.Icon
                icon={passwordEye ? 'eye-off' : 'eye'}
                onPress={() => handlePassEye()}
              />
            }
            secureTextEntry={passwordEye}
            onChangeText={e => handlePass(e)}
            value={password}
          />
          {passwordError ? (
            <Text style={styles.errorText}>{passwordError}</Text>
          ) : null}
        </View>

        <View>
          {/* Forgot Password */}
          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <View
            style={{
              width: '100%',
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => handleLogin()}>
              <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>
          </View>

          {/* Sign Up Link */}
          <View style={styles.signUpContainer}>
            <Text>Not a member? </Text>
            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up Here</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          {/* Social Login Buttons */}
          <View style={styles.socialLoginContainer}>
            <View style={styles.separator}>
              <Text>or Sign In with:</Text>
            </View>
            <View style={styles.socialButtons}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="google" size={30} color={'black'} />
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name="apple" size={30} color={'black'} />
              </View>
              <View style={styles.iconContainer}>
                <MaterialIcons name="facebook" size={30} color={'black'} />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity>
            <Text style={styles.guestLink}>Enter as Guest</Text>
          </TouchableOpacity>
        </View>

        {/* Enter as Guest */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
    height: '100%',
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 50,
  },
  imageContainer: {
    // marginVertical: 20,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  inputLabel: {
    color: 'black',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginVertical: 8,
    color: '#007BFF',
  },
  signInButton: {
    backgroundColor: '#21D393',
    padding: 10,
    borderRadius: 5,
    marginVertical: 8,
    marginBottom: 15,
    alignItems: 'center',
    paddingHorizontal: 18,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'flex-end',
  },
  signUpLink: {
    color: '#007BFF',
  },
  socialLoginContainer: {
    alignItems: 'center',
  },
  separator: {
    marginVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
  },
  socialIcon: {
    width: 50,
    height: 50,
  },
  guestLink: {
    color: '#007BFF',
  },
  iconContainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    backgroundColor: '#fff',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 2,
    padding: 5,
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    fontSize: 14,
    // marginTop: 5,
    // marginBottom: 15,
    alignSelf: 'flex-start',
  },
});

export default Login;
