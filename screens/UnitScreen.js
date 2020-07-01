import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import LinearGradientBottom from '../components/LinearGradientBottom';
import ButtomCustome from './../components/ButtonCutome';
import HeaderUnit from './../components/HeaderUnit';
import WordItem from './../components/WordItem';
import { screenHeight, screenWidth } from './../helper/SizeScreen';
import { TEST_SCREEN } from './../config/ScreenName';

import firestore from '@react-native-firebase/firestore';

function UnitScreen({ route, navigation }) {
  const { wordList, unitName, unitId } = route.params;
  const [words, setWords] = useState([]);
  const flatListRef = useRef(null);
  useEffect(() => {
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
  }, [flatListRef, unitId]);
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
            return <WordItem navigation={navigation} word={item} />;
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
