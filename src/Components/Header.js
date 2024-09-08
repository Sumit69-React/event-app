import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Hello Renzo!</Text>
      <Text style={styles.subtitle}>Are you ready to dance?</Text>
    </View>
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
});

export default Header;
