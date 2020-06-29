import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { UNIT_SCREEN } from './../config/ScreenName';

function progressSection({ navigation, unit, myUnit }) {
  const { wordLearnedNumber } = myUnit;
  const { wordNumber } = unit;
  return (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate(UNIT_SCREEN, {
          wordList: unit.wordList,
          unitName: unit.unitName,
          unitId: unit.unitId,
        })
      }>
      <View style={styles.container}>
        <ProgressCircle
          percent={wordLearnedNumber / wordNumber}
          radius={50}
          borderWidth={10}
          color="#153f35"
          shadowColor="#d9ebe1"
          bgColor="#81d0bb">
          <Text style={{ fontSize: 18 }}>
            {`${wordLearnedNumber / wordNumber}%`}
          </Text>
        </ProgressCircle>
        <Text style={{ marginTop: 20 }}>
          {unit.unitName ? unit.unitName : 'khong co du lieu'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default progressSection;
const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
