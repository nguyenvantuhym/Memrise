import React, { useEffect, useLayoutEffect, useState } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { screenHeight, screenWidth } from './../helper/SizeScreen';
import firestore from '@react-native-firebase/firestore';
import WordDetail from './../components/WordDetail';

export default function WordDetailScreen({ route, navigation }) {
  const { wordId } = route.params;
  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     title: title,
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   });
  // }, [navigation, title]);
  const [word, setWord] = useState({});

  useEffect(() => {
    firestore()
      .collection('words')
      .doc(wordId)
      .get()
      .then(wordRes => {
        setWord(wordRes.data());
      });
  }, [wordId]);
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      // scrollEnabled={false}
      data={[0, 1, 2, 3]}
      pagingEnabled
      snapToAlignment={'center'}
      renderItem={({ item }) => (
        <WordDetail navigation={navigation} word={word} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: screenHeight(100),
    width: screenWidth(100),
    alignItems: 'center',
  },
  containerCenter: {
    height: screenHeight(100),
    width: screenWidth(100),
    position: 'relative',
    backgroundColor: '#f3f3f3',
  },
  center: {
    flex: 4,
    width: '90%',
    alignItems: 'center',
  },
});
