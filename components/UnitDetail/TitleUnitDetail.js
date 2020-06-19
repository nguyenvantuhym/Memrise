import React from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

export default function TitleUnitDetail() {
  return (
    <View style={styles.container}>
      <View style={styles.unit}>
        <Text style={styles.unitNumber}>3</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Unit03 - Tính từ</Text>
        <Text style={styles.number}>0/39</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    height: screenHeight(17),
    marginHorizontal: screenWidth(2),
    marginTop: screenHeight(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  content: {
    paddingLeft: screenWidth(2),
  },
  title: {
    fontWeight: '700',
    fontSize: 25,
    marginBottom: 3,
    paddingTop: screenHeight(1),
  },
  number: {
    textTransform: 'lowercase',
    fontWeight: '500',
    fontSize: 15,
    paddingLeft: screenWidth(1),
  },
  unit: {
    width: screenWidth(9),
    height: '100%',
    backgroundColor: '#b8b8ba',
    display: 'flex',
    alignItems: 'center',
  },
  unitNumber: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    paddingTop: screenHeight(1.5),
  },
});
