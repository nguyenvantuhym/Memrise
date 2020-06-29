import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
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
        <Text style={TopStyle.mean}>{word.wordMean}</Text>
      </View>
      <Image style={styles.wordImage} source={tree0} />
    </View>
  );
};
const TopStyle = StyleSheet.create({
  textStyle: { color: 'red', fontWeight: 'bold' },
  mean: {
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
});

const Center = props => (
  <View style={CenterStyle.center}>
    <View style={CenterStyle.container}>
      <View style={CenterStyle.chooseWord}><Text>Chọn từ</Text></View>
      <View style={CenterStyle.listWord}>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
          <Word/>
        <WordSpace/>
      </View>
    </View>
    <View style={{ height: screenHeight(8) }} />
  </View>
);
const CenterStyle = StyleSheet.create({
  container: {
    height: screenWidth(70),
    width: screenWidth(94),
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  center: {
    flex: 7,
    width: screenWidth(94),
    marginRight: screenWidth(1)
  },
  listWord: {
     width: screenWidth(94),
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      marginLeft: screenWidth(4.7)
  },
  chooseWord: {
      width: screenWidth(90),
      height: screenHeight(8),
      borderBottomColor: '#e1e2e5',
      borderBottomWidth: 1,
      marginLeft: screenWidth(2),
      marginBottom: screenHeight(2)
  }
});

const Word = props => (
  <View style={WordStyle.center}> 
      <Text style={WordStyle.word}>手</Text>
  </View>
);
const WordStyle = StyleSheet.create({
  word: {
    padding: 13,
    backgroundColor: '#95d9e6',
    borderRadius: 4,
    marginRight: screenWidth(3),
    marginBottom: screenWidth(3)
  }
});
const WordSpace = props => (
    <View style={WordSpaceStyle.center}> 
    </View>
  );
  const WordSpaceStyle = StyleSheet.create({
    center: {
      width: screenWidth(40),
      backgroundColor: '#95d9e6',
      borderRadius: 4,
      marginRight: screenWidth(3),
      marginBottom: screenWidth(3),
    }
  });

const ButtonBottom = ({ navigation }) => (
  <View style={styleButtonBottom.bottom}>
    <Button
      title="Bỏ qua"
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
    backgroundColor: '#fff',
    borderRadius: 15,
    width: screenWidth(90),
    height: screenHeight(8),
  },
  fontTextButton: { fontSize: 20, color: '#000', fontWeight: '700' },
});

export default function ChooseWordScreen({ route, navigation }) {
  //   const { id } = route.params;
  //   const [word, setWord] = useState({});
  //   useEffect(() => {
  //     firestore()
  //       .collection('words')
  //       .doc(id)
  //       .get()
  //       .then(wordres => {
  //         setWord(wordres.data());
  //         console.log(wordres.data());
  //       });
  //   }, [id]);
  return (
    <View style={styles.containerCenter}>
      <View style={styles.container}>
        <Top word={{ wordOrigin: '男性', wordMean: 'Đàn ông' }} />
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
