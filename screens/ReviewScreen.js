/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';

import FlatListQuiz from './../components/FlatListQuiz';

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
    });
  }, [navigation]);
  useEffect(() => {
    // console.log(myCourseCurrent);
  }, []);

  return <FlatListQuiz navigation={navigation} />;
};

export default TestScreen;
