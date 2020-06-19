import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  PixelRatio,
  Image,
} from 'react-native';
import icon from './../asset/demo2.png';
// const deviceHeight = Dimensions.get('window').height;

// const screenHeight = percent => (percent * deviceHeight) / 100;

// import firestore from '@react-native-firebase/firestore';

const Answer = props => (
  <View style={answerStyle.itemAnswerContainer}>
    <Text>元気</Text>
  </View>
);

class TestScreen extends React.Component {
  componentDidMount = async () => {
    // const user = await firestore()
    //   .collection('Users')
    //   .doc('us')
    //   .get();
    // console.log(user.data());
  };

  render() {
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
        <View style={{height: 90, width: '100%'}} />
      </View>
    );
  }
}
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
});

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
