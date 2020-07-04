import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import speaker from '../images/speaker.png';
import tree0 from '../images/demo.png';

import progress0 from './../asset/progress0.png';
import progress1 from './../asset/progress1.png';
import progress2 from './../asset/progress2.png';
import progress3 from './../asset/progress3.png';
import progress4 from './../asset/progress4.png';
import progress5 from './../asset/progress5.png';
import progress6 from './../asset/progress6.png';
const listProgress = [
  progress0,
  progress1,
  progress2,
  progress3,
  progress4,
  progress5,
  progress6,
];


const Top = props => {
  const { word, progress } = props;
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
      <Image style={TopStyle.wordImage} source={listProgress[progress]} />
    </View>
  );
};
export default Top;
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
  wordImage: {
    flex: 2,
    width: 90,
    height: 85,
  },
});
