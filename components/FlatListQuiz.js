import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import QuizComponent from './QuizComponent';
import FilterComponentLearning from './FilterComponentLearning';

const FlatListQuiz = props => {
  const { navigation } = props;
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      // scrollEnabled={false}
      data={[0, 1, 6]}
      pagingEnabled
      snapToAlignment={'center'}
      renderItem={({ item }) => (
        <FilterComponentLearning navigation={navigation} />
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
export default FlatListQuiz;
