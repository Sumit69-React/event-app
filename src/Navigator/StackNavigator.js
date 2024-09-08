import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  CardStyleInterpolators,
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import {Platform} from 'react-native';
import Login from '../Screens/Login/Login';
import Events from '../Screens/Event/Events';
import BottomNavigation from './BottomNavigation';
import SearchEvent from '../Screens/Event/SearchEvent';
import Favorite from '../Screens/Event/Favorite';
import Profile from '../Screens/Event/Profile';

const Stack = createStackNavigator();

const StackNavigator = props => {
  console.log('route===', props.isLogedin);
  return (
    <Stack.Navigator
      initialRouteName={props.isLogedin == true ? 'BottomNavigation' : 'Login'}
      screenOptions={{
        gestureEnabled: Platform.OS == 'android' ? false : true,
        headerShown: false,
        animationEnabled: true,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Favorite" component={Favorite} />
      <Stack.Screen name="SearchEvent" component={SearchEvent} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Events" component={Events} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
