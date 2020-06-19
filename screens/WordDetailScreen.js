import React from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Top from '../components/WordDetail/Top';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

export default function WordDetail() {
  return (
    <View style={styles.container}>
      <Top/>
    </View>
  );
}

const styles = StyleSheet.create({});
