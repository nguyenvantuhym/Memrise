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
import icon from './../asset/demo2.png';
import flash1 from './../asset/flash.png';
import { screenWidth } from './../helper/SizeScreen';

const WordItem = props => {
  const { navigation, word } = props;
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(WORD_DETAIL_SCREEN, { word: word })}
      style={styleContent.containerContent}>
      <View style={{ flex: 2 }}>
        <Image
          source={icon}
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
