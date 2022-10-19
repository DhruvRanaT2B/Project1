import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppBar from './Appbar';
import ListItem from './listItem';

const Home = () => {
  return (
    <View>
      {/* AppBar  */}
      <AppBar />
      {/* ScrollView  */}
      <ListItem />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
