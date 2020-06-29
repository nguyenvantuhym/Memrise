import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { screenWidth } from './../helper/SizeScreen';

const Center = props => (
  <View style={CenterStyle.container}>
    {props.add === true ? <Text>Add</Text> : <Text>{props.description}</Text>}
  </View>
);
export default Center;
const CenterStyle = StyleSheet.create({
  container: {
    height: screenWidth(60),
    width: screenWidth(90),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
