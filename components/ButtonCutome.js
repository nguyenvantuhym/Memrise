import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';

const ButtomCustome = props => {
  const styles = StyleSheet.create({
    containerButton: {
      position: 'relative',
    },
    up: {
      zIndex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      justifyContent: 'center',
      alignItems: 'center',
      height: props.height,
      width: props.width,
      backgroundColor: '#ffc000',
      borderRadius: 20,
      borderWidth: 0,
    },
    down: {
      zIndex: 0,
      top: 5,
      left: 2,
      position: 'absolute',
      height: props.height,
      width: props.width,
      backgroundColor: '#c49a0a',
      borderRadius: 20,
      borderWidth: 0,
      borderColor: '#fff',
    },
    text: {
      textAlign: 'center',
      fontSize: props.fontSize,
      fontWeight: 'bold',
      color: '#2f2d3b',
    },
  });

  return (
    <View style={styles.containerButton}>
      <TouchableOpacity style={styles.up} onPress={props.onPress}>
        <Text style={styles.text}>{props.title}</Text>
      </TouchableOpacity>
      <View style={styles.down} />
    </View>
  );
};
export default ButtomCustome;
