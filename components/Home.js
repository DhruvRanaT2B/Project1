import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from './Appbar';
import ListItem from './listItem';

const Home = () => {
  return (
    <View>
      {/* AppBar  */}
      <AppBar title="Project 1" />
      {/* ScrollView  */}
      <ListItem />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
