import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const Appbar = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Project 1</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#B1AFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Appbar;
