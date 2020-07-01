import React, { useContext } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { screenHeight, screenWidth } from './../helper/SizeScreen';
import Top from './TopWordDetail';
import Center from './CenterWordItem';
import { Button } from 'react-native-elements';
import { TEST_SCREEN } from './../config/ScreenName';

const ButtonBottom = props => {
  return (
    <View style={styleButtonBottom.bottom}>
      <Button
        title="TIẾP TỤC"
        type="outline"
        buttonStyle={styleButtonBottom.buttonBottom}
        titleStyle={styleButtonBottom.fontTextButton}
        onPress={() => {}}
      />
    </View>
  );
};

const styleButtonBottom = StyleSheet.create({
  bottom: {
    flex: 3,
    width: '100%',
    position: 'absolute',
    alignItems: 'center',
    bottom: screenHeight(2),
  },
  buttonBottom: {
    backgroundColor: '#ffc000',
    borderRadius: 15,
    width: screenWidth(90),
    height: screenHeight(8),
  },
  fontTextButton: { fontSize: 20, color: '#000', fontWeight: '700' },
});

const WordDetailComponent = props => {
  const { word } = props;
  return (
    <View style={styles.containerCenter}>
      <View style={styles.container}>
        <Top word={word} />
        <View style={styles.center}>
          <FlatList
            horizontal
            // scrollEnabled={false}
            data={word.description}
            pagingEnabled
            ListFooterComponent={() => <Center add />}
            snapToAlignment={'center'}
            renderItem={({ item }) => <Center add={false} description={item} />}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
      <ButtonBottom />
    </View>
  );
};
export default WordDetailComponent;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: screenHeight(100),
    width: screenWidth(100),
    alignItems: 'center',
  },
  containerCenter: {
    height: '100%',
    width: screenWidth(100),
    backgroundColor: '#f3f3f3',
  },
  center: {
    flex: 4,
    width: '90%',
    alignItems: 'center',
  },
});
