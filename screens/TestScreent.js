import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  PixelRatio,
  Image,
} from 'react-native';
import icon from './../asset/demo2.png';

import logo from './../images/logos.png';
import Cancel from './../images/cancel.png';
import { screenHeight, screenWidth } from './../helper/SizeScreen';
// const deviceHeight = Dimensions.get('window').height;

// const screenHeight = percent => (percent * deviceHeight) / 100;

// import firestore from '@react-native-firebase/firestore';

const Answer = props => (
  <View style={answerStyle.itemAnswerContainer}>
    <Text>元気</Text>
  </View>
);

const answerStyle = StyleSheet.create({
  itemAnswerContainer: {
    width: '48%',
    height: '30%',
    marginHorizontal: '1%',
    borderRadius: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    marginTop: '2%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TestScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: ' ',
      headerNone: true,
      headerStyle: {
        backgroundColor: '#80d0bb',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate();
          }}>
          <Image style={styles.cancel} source={Cancel} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <View style={styles.scores}>
          <Text style={styles.number}>10</Text>
        </View>
      ),
    });
  }, [navigation]);

  React.useEffect(() => {
    // const user = await firestore()
    //   .collection('Users')
    //   .doc('us')
    //   .get();
    // console.log(user.data());
  });

  return (
    <View style={styles.screen}>
      <View style={styles.QuestionContainer}>
        <View style={styles.Question}>
          <Text style={styles.TextQuestion}>Được chuyển đến, đạt được</Text>
        </View>
        <View style={styles.imgProgress}>
          <Image
            source={icon}
            style={{
              width: PixelRatio.getPixelSizeForLayoutSize(20),
              height: PixelRatio.getPixelSizeForLayoutSize(25),
            }}
          />
        </View>
      </View>
      <View style={styles.AnswerContainer}>
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
        <Answer />
      </View>
      <View style={{ height: 90, width: '100%' }} />
    </View>
  );
};

export default TestScreen;
const styles = StyleSheet.create({
  screen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  QuestionContainer: {
    flex: 1,
    padding: '5%',
    paddingBottom: 0,
    flexDirection: 'row',
  },
  AnswerContainer: {
    flex: 3,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: '4%',
  },
  imgProgress: {
    flex: 2,
  },
  Question: {
    flex: 10,
  },
  TextQuestion: {
    color: '#2b343f',
    fontSize: 25,
    fontWeight: 'bold',
  },
  scores: {
    paddingHorizontal: screenWidth(7),
    paddingTop: screenWidth(1),
    paddingBottom: screenWidth(1),
    backgroundColor: '#78c5b0',
    marginRight: 10,
    borderRadius: screenWidth(4),
  },
  number: {
    color: '#2a3546',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancel: {
    height: 24,
    width: 24,
    marginLeft: screenWidth(4),
  },
});
