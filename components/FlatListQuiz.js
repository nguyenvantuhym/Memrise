import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import FilterComponentLearning from './FilterComponentLearning';

const FlatListQuiz = props => {
  const { navigation } = props;
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      data={[0]}
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
