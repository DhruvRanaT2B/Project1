import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import AppBar from './Appbar';
const DownloadScreen = props => {
  const {width, height, url, title, id, uri, download_url} = props.route.params;
  return (
    <View style={{}}>
      <AppBar title="Download Page" />
      <Image
        style={{width: width / 10, height: height / 10}}
        source={{
          uri: download_url,
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default DownloadScreen;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    marginTop: 10,
    padding: 10,
    color: 'blue',
    fontWeight: 'bold',
  },
});
