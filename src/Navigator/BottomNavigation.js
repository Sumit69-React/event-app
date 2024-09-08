import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Events from '../Screens/Event/Events';
import SearchEvent from '../Screens/Event/SearchEvent';
import Favorite from '../Screens/Event/Favorite';
import Profile from '../Screens/Event/Profile';
const Tab = createBottomTabNavigator();

function BottomNavigation(props) {
  const {navigation} = props;

  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Search"
        component={SearchEvent}
        backgroundColor={'black'}
        options={{
          activeTintColor: 'white',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={focused ? 'magnify' : 'magnify'}
                color={focused ? 'black' : 'grey'}
                size={focused ? 30 : 30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Events"
        component={Events}
        backgroundColor={'black'}
        options={{
          activeTintColor: 'white',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={
                  focused ? 'calendar-month-outline' : 'calendar-month-outline'
                }
                color={focused ? 'black' : 'grey'}
                size={focused ? 30 : 30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        backgroundColor={'black'}
        options={{
          activeTintColor: 'white',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={focused ? 'heart-outline' : 'heart-outline'}
                color={focused ? 'black' : 'grey'}
                size={focused ? 30 : 30}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        backgroundColor={'black'}
        options={{
          activeTintColor: 'white',
          tabBarLabelStyle: {color: 'black'},
          tabBarIcon: ({color, focused}) => (
            <View style={focused ? styles.iconfocusviewstyle : ''}>
              <MaterialCommunityIcons
                name={focused ? 'account-outline' : 'account-outline'}
                color={focused ? 'black' : 'grey'}
                size={focused ? 30 : 30}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBarLabel: {
    // fontSize: fontSizes.verySmall,
  },
  tabBarLabelActive: {
    // color: colors.tabtext,
    color: 'black',
  },
  tabBarItemStyle: {},
  tabBarIconStyle: {
    // fontSize: fontSizes.xxbig,
    textAlign: 'center',
  },
  plushiconstyle: {
    marginTop: '-10%',
    marginBottom: '-20%',
    elevation: 5,
    // shadowColor: colors.buttoncolor,
    shadowColor: 'black',
    fontSize: 50,
  },
  iconfocusviewstyle: {
    justifyContent: 'center',
    elevation: 15,
    // shadowColor: colors.themedarkgreen,
    shadowColor: 'black',
    // shadowOpacity: 0.9,
    // shadowRadius: 10,
    // shadowOffset: {
    //   height: 1,
    //   width: 0,
    // },
  },
});
