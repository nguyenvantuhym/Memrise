import React, {useEffect, useContext, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

import {Context} from '../context/ContextUser';
import {COURSE_SCREEN} from '../config/ScreenName';
import LinearGradientBottom from '../components/LinearGradientBottom';
import ButtomCustome from '../components/ButtonCutome';
import CourseItem from '../components/CourseItem';
import {screenHeight, screenWidth} from './../helper/SizeScreen';

function ListCourseScreen(props) {
  const {user} = useContext(Context);
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    console.log(user);
    const {navigation} = props;
    // console.log(user);
    if (user) {
      firestore()
        .collection('courses')
        .get()
        .then(res => {
          setCourses(res.docs.map(doc => ({id: doc.id, ...doc.data()})));
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

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={courses}
          renderItem={({item}) => {
            console.log(item);
            return <CourseItem course={item} discription="Asdad" />;
          }}
          keyExtractor={item => item.id}
        />
      </View>
      <LinearGradientBottom>
        <View
          style={{
            height: '100%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtomCustome
            height={screenHeight(6)}
            width={screenWidth(70)}
            fontSize={20}
            title="Thêm khóa học khác"
            onPress={() => {
              const {navigation} = props;
              //navigation.navigate(LIST_COURSE_SCREEN);
            }}
          />
        </View>
      </LinearGradientBottom>
    </View>
  );
}
export default ListCourseScreen;

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
