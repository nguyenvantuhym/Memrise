import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HeaderUnit from './../components/HeaderUnit';
import WordItem from './../components/WordItem';
// import {screenHeight, screenWidth} from './../helper/SizeScreen';
// import firestore from '@react-native-firebase/firestore';

function UnitScreen({ route, navigation }) {
  const { wordList } = route.params;
  const [words, setWords] = useState([]);
  useEffect(() => {
    if (wordList) {
      setWords(wordList);
    }
  }, [wordList]);
  return (
    <View style={styles.screen}>
      <View style={styles.listSectionCourse}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 130 }}
          ListHeaderComponent={() => <HeaderUnit headerName={'blabla title'} />}
          data={words}
          renderItem={({ item }) => {
            return <WordItem navigation={navigation} unit={item} />;
          }}
          keyExtractor={item => item.wordId}
        />
      </View>
      <LinearGradient
        colors={['transparent', '#fff']}
        style={styles.LinearGradientStyle}>
        <View />
      </LinearGradient>
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
});
