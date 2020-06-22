import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const LinearGradientBottom = props => {
  return (
    <LinearGradient
      colors={['transparent', '#fff']}
      style={styles.LinearGradientStyle}>
      {props.children}
    </LinearGradient>
  );
};
export default LinearGradientBottom;

const styles = StyleSheet.create({
  LinearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
});
