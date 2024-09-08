/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {configureStore} from './src/store';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/Navigator/StackNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getLoggedInUser} from './src/helper/event_helper';

function App() {
  const [IsLogedin, setIsLogedin] = useState(false);
  const [checkedSignIn, setcheckedSignIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const chekisSignedIn = async () => {
        try {
          let USER_DATA = await AsyncStorage.getItem('LOGIN_DATA');

          USER_DATA = JSON.parse(USER_DATA);
          console.log('LOGIN_DATA========', USER_DATA);

          if (USER_DATA) {
            setIsLogedin(true);
          }

          setcheckedSignIn(true);
        } catch (error) {
          console.log('error========', error);
          setIsLogedin(false);
          setcheckedSignIn(true);
        }
      };
      chekisSignedIn();
    }, 1200);
  }, []);

  getLoggedInUser();

  return (
    <Provider store={configureStore}>
      <NavigationContainer>
        {checkedSignIn == true && <StackNavigator isLogedin={IsLogedin} />}
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
