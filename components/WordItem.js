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

const WordItem = props => {
  const { navigation, unit } = props;
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(WORD_DETAIL_SCREEN, { id: unit.wordId })
      }
      style={styleContent.containerContent}>
      <View style={{ flex: 2 }}>
        <Image
          source={icon}
          style={{
            width: PixelRatio.getPixelSizeForLayoutSize(20),
            height: PixelRatio.getPixelSizeForLayoutSize(25),
          }}
        />
      </View>

      <View style={{ flex: 5 }}>
        <View style={styleContent.titleContent}>
          <Text style={{ fontSize: 17, color: '#373a3c' }}>
            {unit.wordOrigin}
          </Text>
        </View>
        <View style={styleContent.descriptionContent}>
          <Text>{unit.wordMean}</Text>
        </View>
      </View>
      <View style={{ flex: 2, alignItems: 'center' }}>
        <View style={styleContent.titleContent}>
          <Text>世話</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styleContent = StyleSheet.create({
  titleContent: {
    marginRight: 10,
    justifyContent: 'center',
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
