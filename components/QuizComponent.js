import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, PixelRatio } from 'react-native';
import Answer from './AnswerTest';
import { screenWidth, screenHeight } from './../helper/SizeScreen';
import icon from './../asset/demo2.png';
import { Context } from './../context/ContextTest';

const QuizComponent = props => {
  const { listAnswer } = useContext(Context);
  const [answer] = listAnswer.filter(item => item.isAnswer);
  if (listAnswer.length === 0) {
    return (
      <View>
        <Text>help tus</Text>
      </View>
    );
  }
  return (
    <View style={styles.screen}>
      <View style={styles.QuestionContainer}>
        <View style={styles.Question}>
          <Text style={styles.TextQuestion}>{answer.word.wordMean}</Text>
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
        <Answer
          text={listAnswer[0].word.wordOrigin}
          isAnswer={listAnswer[0].isAnswer}
        />
        <Answer
          text={listAnswer[1].word.wordOrigin}
          isAnswer={listAnswer[1].isAnswer}
        />
        <Answer
          text={listAnswer[2].word.wordOrigin}
          isAnswer={listAnswer[2].isAnswer}
        />
        <Answer
          text={listAnswer[3].word.wordOrigin}
          isAnswer={listAnswer[3].isAnswer}
        />
        <Answer
          text={listAnswer[4].word.wordOrigin}
          isAnswer={listAnswer[4].isAnswer}
        />
        <Answer
          text={listAnswer[5].word.wordOrigin}
          isAnswer={listAnswer[5].isAnswer}
        />
      </View>
      <View
        style={{
          height: 90,
          width: '100%',
        }}
      />
    </View>
  );
};
export default QuizComponent;

const styles = StyleSheet.create({
  screen: {
    width: screenWidth(100),
    height: screenHeight(100),
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
