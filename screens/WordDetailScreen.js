import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import tree0 from '../images/demo.png';
import speaker from '../images/speaker.png';
import { TEST_SCREEN } from './../config/ScreenName';
import { screenHeight, screenWidth } from './../helper/SizeScreen';
import firestore from '@react-native-firebase/firestore';

const Top = props => {
  const { word } = props;
  return (
    <View style={TopStyle.top}>
      <View style={TopStyle.topLeft}>
        <Text style={TopStyle.kanjiText}>{word.wordOrigin}</Text>
        <Text>{word.wordMean}</Text>
        <Image source={speaker} style={TopStyle.speaker} />
        <View>
          <Text style={TopStyle.textStyle}>KANJI</Text>
          <Text>Mean</Text>
        </View>
      </View>
      <Image style={styles.wordImage} source={tree0} />
    </View>
  );
};
const TopStyle = StyleSheet.create({
  textStyle: { color: 'red', fontWeight: 'bold' },
  kanjiText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
  },
  topLeft: {
    flexDirection: 'column',
    flex: 8,
  },
  top: {
    flex: 2,
    flexDirection: 'row',
    width: '90%',
  },
  speaker: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
});

const Center = props => (
  <View style={CenterStyle.center}>
    <View style={CenterStyle.container}>
      <Text>sdkskdfj</Text>
    </View>
    <View style={{ height: screenHeight(8) }} />
  </View>
);
const CenterStyle = StyleSheet.create({
  container: {
    height: screenWidth(60),
    width: screenWidth(94),
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    flex: 4,
    width: '90%',
    alignItems: 'center',
  },
});

const ButtonBottom = ({ navigation }) => (
  <View style={styleButtonBottom.bottom}>
    <Button
      title="TIẾP TỤC"
      type="outline"
      buttonStyle={styleButtonBottom.buttonBottom}
      titleStyle={styleButtonBottom.fontTextButton}
      onPress={() => navigation.push(TEST_SCREEN)}
    />
  </View>
);

const styleButtonBottom = StyleSheet.create({
  bottom: {
    flex: 3,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: screenHeight(2.5),
  },
  buttonBottom: {
    backgroundColor: '#ffc000',
    borderRadius: 15,
    width: screenWidth(90),
    height: screenHeight(8),
  },
  fontTextButton: { fontSize: 20, color: '#000', fontWeight: '700' },
});

export default function WordDetailScreen({ route, navigation }) {
  const { id } = route.params;
  const [word, setWord] = useState({});
  useEffect(() => {
    firestore()
      .collection('words')
      .doc(id)
      .get()
      .then(wordres => {
        setWord(wordres.data());
        console.log(wordres.data());
      });
  }, [id]);
  return (
    <View style={styles.containerCenter}>
      <View style={styles.container}>
        <Top word={word} />
        <Center />
      </View>
      <ButtonBottom navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
  containerCenter: {
    width: '100%',
    height: '100%',
    position: 'relative',
    backgroundColor: '#f3f3f3',
  },
  wordImage: {
    flex: 2,
    width: 90,
    height: 85,
  },
});
