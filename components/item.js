import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DownloadScreen from './DownloadScreen.js';

const Stack = createNativeStackNavigator();
const Item = ({width, height, url, title, id, uri, download_url}) => {
  // const [imageUrl, setimageUrl] = useState(item.url);
  useEffect(() => {
    console.log(uri);
  }, []);

  return (
    <View style={{}} key={id}>
      <Image
        style={{width: width / 10, height: height / 10}}
        source={{
          uri: uri,
        }}
      />
      <Text>{title}</Text>
      <View style={styles.button}>
        <Button
          title="Download"
          color="#B1AFFF"
          onPress={() => {
            console.log('Hello');
          }}
        />
      </View>
    </View>
  );
};

export default Item;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    padding: 10,
    flex: 1,
    color: '#B1AFFF',
  },
});

{
  /*rnfes */
}
