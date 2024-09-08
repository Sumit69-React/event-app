import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from 'react-native-paper';
import RNRestart from 'react-native-restart';

const Profile = () => {
  const [userData, setuserData] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      const data = await AsyncStorage.getItem('LOGIN_DATA');
      setuserData(data);
    };
    getdata();
  }, []);

  console.log(userData);

  const onLogout = async () => {
    await AsyncStorage.clear();
    RNRestart.restart();
  };

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.title}>Hello Renzo!</Text>
      </View>
      <View style={{flex: 1, padding: 20}}>
        <TouchableOpacity onPress={() => onLogout()} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    backgroundColor: 'white',
    padding: 20,
  },
  title: {
    fontSize: 26,
    color: 'black',
  },
  subtitle: {
    fontSize: 16,
  },
  pic: {
    width: 80,
    height: 80,
  },
  logoutBtn: {
    width: '100%',
    padding: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  logoutText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});

export default Profile;
