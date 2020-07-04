import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  PixelRatio,
  TouchableOpacity,
} from 'react-native';
import { WORD_DETAIL_SCREEN } from './../config/ScreenName';
import progress0 from './../asset/progress0.png';
import progress1 from './../asset/progress1.png';
import progress2 from './../asset/progress2.png';
import progress3 from './../asset/progress3.png';
import progress4 from './../asset/progress4.png';
import progress5 from './../asset/progress5.png';
import progress6 from './../asset/progress6.png';
import flash1 from './../asset/flash1.png';

import { screenWidth } from './../helper/SizeScreen';

const listProgress = [
  progress0,
  progress1,
  progress2,
  progress3,
  progress4,
  progress5,
  progress6,
];

const WordItem = props => {
  const { navigation, word, progress } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(WORD_DETAIL_SCREEN, {
          wordId: word.wordId,
          progress: progress,
        })
      }
      style={styleContent.containerContent}>
      <View style={{ flex: 2 }}>
        <Image
          source={listProgress[progress]}
          style={{
            width: screenWidth(12),
            height: screenWidth(14),
          }}
        />
      </View>
      <View style={{ flex: 5 }}>
        <View style={styleContent.titleContent}>
          <Text style={{ fontSize: 17, color: '#373a3c' }}>
            {word.wordOrigin}
          </Text>
        </View>
        <View style={styleContent.descriptionContent}>
          <Text>{word.wordMean}</Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: 'flex-end' }}>
        <View style={styleContent.titleContent}>
          <Image source={flash1} style={{ width: 20, height: 40 }} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styleContent = StyleSheet.create({
  titleContent: {
    marginRight: 15,
  },
  containerContent: {
    marginTop: 5,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#fdfaf3',
    flexDirection: 'row',
    marginHorizontal: 5,
    height: 80,
  },
  descriptionContent: {
    marginTop: 5,
  },
});
export default WordItem;
