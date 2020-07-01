/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useContext, useEffect } from 'react';

import Provider from './../context/ContextTest';

import FlatListQuiz from './../components/FlatListQuiz';
import { ContextUser } from './../context/ContextUser';
// import { COURSE_SCREEN } from './../config/ScreenName';

const TestScreen = ({ navigation }) => {
  const { indexUnit, myCourseCurrent } = useContext(ContextUser);
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
    console.log(myCourseCurrent);
  }, []);

  return (
    <Provider>
      <FlatListQuiz navigation={navigation} />
    </Provider>
  );
};

export default TestScreen;
