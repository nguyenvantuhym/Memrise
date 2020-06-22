import React, {useEffect, useContext, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

import {Context} from './../context/ContextUser';
import {COURSE_SCREEN} from '../config/ScreenName';
import LinearGradientBottom from './../components/LinearGradientBottom';
import ButtomCustome from './../components/ButtonCutome';
import CourseItem from './../components/CourseItem';

function SelectCourseScreen(props) {
  const {user} = useContext(Context);
  useEffect(() => {
    console.log(user);
    const {navigation} = props;
    // console.log(user);
    if (user) {
      firestore()
        .collection('users')
        .doc(user.uid)
        .get()
        .then(res => {
          const courseId = res.data().myCourse[0].courseId;
          firestore()
            .collection('courses')
            .doc(courseId)
            .get()
            .then(resCourse => {
              // setCourses([resCourse.data()]);
            });
        });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{name: COURSE_SCREEN}],
        }),
      );
    }
  }, [props, user]);
  const courses = [
    {
      id: '1sadasd',
      courseName: 'mimi kara oboeru',
    },
    {
      id: '2asdasd',

      courseName: 'mimi kara oboeru',
    },

    {
      id: '3asdasd',

      courseName: 'mimi kara oboeru',
    },

    {
      id: '4asdff',
      courseName: 'mimi kara oboeru',
    },
    {
      id: '5sadasd',
      courseName: 'mimi kara oboeru',
    },
    {
      id: '6asdasd',

      courseName: 'mimi kara oboeru',
    },

    {
      id: '7asdasd',

      courseName: 'mimi kara oboeru',
    },

    {
      id: '8asdff',
      courseName: 'mimi kara oboeru',
    },
    {
      id: '9asdasd',

      courseName: 'mimi kara oboeru',
    },

    {
      id: '10asdff',
      courseName: 'mimi kara oboeru',
    },
    {
      id: '11sadasd',
      courseName: 'mimi kara oboeru',
    },
    {
      id: '12asdasd',
      courseName: 'mimi kara oboeru',
    },

    {
      id: '13asdasd',

      courseName: 'mimi kara oboeru',
    },

    {
      id: '14asdff',
      courseName: 'mimi kara oboeru',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={courses}
          renderItem={({item}) => {
            console.log(item);
            return (
              <CourseItem courseName={item.courseName} discription="Asdad" />
            );
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <LinearGradientBottom>
        <ButtomCustome />
      </LinearGradientBottom>
    </View>
  );
}
export default SelectCourseScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fdfaf3',
    height: '100%',
  },
  content: {
    flex: 1,
  },
  LinearGradient: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
});
