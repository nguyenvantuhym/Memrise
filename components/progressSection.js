/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import ProgressCircle from 'react-native-progress-circle';
import { UNIT_SCREEN } from './../config/ScreenName';
import { ContextUser } from './../context/ContextUser';

function progressSection({ navigation, unit, index, myUnit }) {
  const { setIndexCurrentUnit, myCourseCurrent } = useContext(ContextUser);
  const { wordNumber } = unit;
  const wordLearningNumber = myCourseCurrent.unitList[index].indexLearning;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIndexCurrentUnit(index);
        navigation.navigate(UNIT_SCREEN, {
          wordList: unit.wordList,
          unitName: unit.unitName,
          unitId: unit.unitId,
        });
      }}>
      <View style={styles.container}>
        <ProgressCircle
          percent={
            isNaN((wordLearningNumber / wordNumber) * 100)
              ? 0
              : (wordLearningNumber / wordNumber) * 100
          }
          radius={50}
          borderWidth={10}
          color="#153f35"
          shadowColor="#d9ebe1"
          bgColor="#81d0bb">
          <Text style={{ fontSize: 18 }}>
            {`${
              isNaN((wordLearningNumber / wordNumber) * 100)
                ? 0
                : ((wordLearningNumber / wordNumber) * 100).toFixed(1)
            }%`}
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
