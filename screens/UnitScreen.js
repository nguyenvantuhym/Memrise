import React, { useEffect, useState, useRef, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import LinearGradientBottom from '../components/LinearGradientBottom';
import ButtomCustome from './../components/ButtonCutome';
import HeaderUnit from './../components/HeaderUnit';
import WordItem from './../components/WordItem';
import { screenHeight, screenWidth } from './../helper/SizeScreen';
import { TEST_SCREEN } from './../config/ScreenName';
import { ContextUser } from './../context/ContextUser';

import firestore from '@react-native-firebase/firestore';

let indexLearning;
let indexLearned = 0;
let learningObj = {};

function UnitScreen({ route, navigation }) {
  const { wordList, unitName, unitId } = route.params;
  const { myCourseCurrent, indexCurrentUnit } = useContext(ContextUser);
  const [words, setWords] = useState([]);
  indexLearning = 0;
  indexLearned = 0;
  const flatListRef = useRef(null);
  useEffect(() => {
    let unsubscribe = navigation.addListener('focus', () => {
      indexLearned = myCourseCurrent.unitList[indexCurrentUnit].indexLearned;
      indexLearning = myCourseCurrent.unitList[indexCurrentUnit].indexLearning;
      myCourseCurrent.unitList[indexCurrentUnit].listQueue?.forEach(
        (queue, index) => {
          queue.elements.forEach(word => {
            learningObj[word.index] = index;
          });
        },
      );
      firestore()
        .collection('units')
        .doc(unitId)
        .get()
        .then(res => {
          setWords(res.data().wordList);
          // setTimeout(() => {
          //   //console.log(flatListRef);
          //   flatListRef.current.scrollToIndex({ animated: true, index: 30 });
          // }, 3000);
        });
      return () => {
        unsubscribe();
      };
    });
  }, [flatListRef, indexCurrentUnit, myCourseCurrent, navigation, unitId]);
  return (
    <View style={styles.screen}>
      <View style={styles.listSectionCourse}>
        <FlatList
          //scrollEnabled={false}
          ref={flatListRef}
          contentContainerStyle={{ paddingBottom: 130 }}
          ListEmptyComponent={() => (
            <View
              style={[styles.containerIndicator, styles.horizontalIndicator]}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}
          ListHeaderComponent={() => <HeaderUnit headerName={unitName} />}
          data={words}
          renderItem={({ item, index }) => {
            let progress = 0;
            if (index < indexLearned) {
              progress = 6;
            } else if (learningObj[index] !== undefined) {
              //console.log(learningObj[index]);
              progress = learningObj[index];
            }
            return (
              <WordItem
                navigation={navigation}
                word={item}
                progress={progress}
              />
            );
          }}
          keyExtractor={item => item.wordId}
        />
      </View>
      <LinearGradientBottom>
        <ButtomCustome
          height={screenHeight(6)}
          width={screenWidth(70)}
          fontSize={20}
          title="Từ và cụm từ"
          onPress={() => {
            navigation.navigate(TEST_SCREEN);
          }}
        />
      </LinearGradientBottom>
    </View>
  );
}
export default UnitScreen;
const styles = StyleSheet.create({
  screen: {
    position: 'relative',
    height: '100%',
    backgroundColor: '#fdfaf3',
  },
  listSectionCourse: {
    flex: 1,
  },
  LinearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
  containerIndicator: {
    width: '100%',
    height: screenHeight(85),
    justifyContent: 'center',
    alignContent: 'center',
  },
  horizontalIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
});
