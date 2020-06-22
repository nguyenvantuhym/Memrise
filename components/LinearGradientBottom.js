import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {screenHeight} from './../helper/SizeScreen';

const LinearGradientBottom = props => {
  return (
    <LinearGradient
      colors={['#ffffff33', '#fff']}
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
    height: screenHeight(13),
    width: '100%',
  },
});
