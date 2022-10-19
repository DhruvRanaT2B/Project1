import {StyleSheet, Text, View, Image, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DownloadScreen from './DownloadScreen.js';

const Item = ({width, height, url, title, id, uri, download_url}) => {
  const NavigateTo = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={DownloadScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
  return (
    <View style={{}} key={id}>
      <Image
        style={{width: width / 10, height: height / 10}}
        source={{
          uri: download_url,
        }}
      />
      <Text>{title}</Text>
      <View style={styles.button}>
        <Button
          title="Download"
          color="#B1AFFF"
          onPress={() => {
            console.log('Hello');
            NavigateTo();
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
