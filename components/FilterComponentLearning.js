import React, { useContext } from 'react';
import WordDetailComponent from './WordDetailComponent';
import QuizComponent from './QuizComponent';
import { Context } from './../context/ContextTest';
import { View } from 'react-native';

const FilterComponentLearning = props => {
  const { stateView, word } = useContext(Context);
  const { navigation } = props;
  if (word === undefined) {
    return <View />;
  }
  switch (stateView) {
    case 0:
      return <WordDetailComponent navigation={navigation} word={word} />;
    case 1:
      return <QuizComponent navigation={navigation} word={word} />;
  }
};
export default FilterComponentLearning;
