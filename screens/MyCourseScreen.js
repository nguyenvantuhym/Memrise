import React, {useEffect, useContext, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {CommonActions} from '@react-navigation/native';

import {Context} from '../context/ContextUser';
import {COURSE_SCREEN, LIST_COURSE_SCREEN} from '../config/ScreenName';
import LinearGradientBottom from '../components/LinearGradientBottom';
import ButtomCustome from '../components/ButtonCutome';
import MyCourseItem from '../components/MyCourseItem';

import {screenHeight, screenWidth} from './../helper/SizeScreen';

function MyCourseScreen(props) {
  const {user} = useContext(Context);
  const [courses, setCourses] = useState([]);
  const {navigation} = props;
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      if (user) {
        const myCourseRef = firestore()
          .collection('myCourses')
          .doc(user.uid);

        myCourseRef.get().then(res => {
          console.log('asdasd tutututu');
          if (res.exists) {
            const lscourse = res.data().listCourse ? res.data().listCourse : [];
            setCourses(lscourse);
          } else {
            myCourseRef.set({listCourse: []}).then(() => {
              console.log(' thanhf cong nhes');
            });
          }
        });
      } else {
        navigation.dispatch(
          CommonActions.reset({
            index: 1,
            routes: [{name: COURSE_SCREEN}],
          }),
        );
      }
    });
    return unsubscribe;
  }, [navigation, props, user]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
        style={{paddingBottom: 30, backgroundColor:"red"}}
          data={courses}
          renderItem={({item}) => {
            console.log(item);
            return <MyCourseItem course={item} discription="Asdad" />;
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
              navigation.navigate(LIST_COURSE_SCREEN);
            }}
          />
        </View>
      </LinearGradientBottom>
    </View>
  );
}
export default MyCourseScreen;

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
