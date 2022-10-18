import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import AppBar from './components/Appbar';
import ListItem from './components/listItem';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App = () => {
  return (
    <View>
      {/* AppBar  */}
      <AppBar />
      {/* ScrollView  */}
      <ListItem />
    </View>
  );
};
const style = StyleSheet.create({});
export default App;
