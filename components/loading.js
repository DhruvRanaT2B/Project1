import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const loading = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Loading ..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  text: {
    fontSize: 40,
  },
});
export default loading;
