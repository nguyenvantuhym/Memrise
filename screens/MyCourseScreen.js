/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { CommonActions } from '@react-navigation/native';
import { ContextUser } from '../context/ContextUser';
import { LIST_COURSE_SCREEN, LOGIN_SCREEN } from '../config/ScreenName';
import LinearGradientBottom from '../components/LinearGradientBottom';
import ButtomCustome from '../components/ButtonCutome';
import MyCourseItem from '../components/MyCourseItem';
import { screenHeight, screenWidth } from './../helper/SizeScreen';

function MyCourseScreen(props) {
  const [fetchFinish, setFetchFinish] = useState(false);
  const { user, listMyCourse, setListMyCourse } = useContext(ContextUser);
  const { navigation } = props;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchDataAndNavigate = () => {
    if (user) {
      console.log('fetch nayf !!!');
      const myCourseRef = firestore()
        .collection('myCourses')
        .doc(user.uid);
      myCourseRef.get().then(res => {
        // console.log(lscourse);
        if (res.exists) {
          const lscourse =
            res.data().listCourse !== undefined ? res.data().listCourse : [];
          setListMyCourse(lscourse);
          setFetchFinish(true);
        } else {
          myCourseRef.set({ listCourse: [] }).then(() => {
            console.log(' thanhf cong nhes');
            setFetchFinish(true);
          });
        }
      });
    } else {
      navigation.dispatch(
        CommonActions.reset({
          index: 1,
          routes: [{ name: LOGIN_SCREEN }],
        }),
      );
    }
  };

  useEffect(() => {
    let unMount = false;
    const unsubscribe = navigation.addListener('focus', () => {
      if (unMount === false) {
        fetchDataAndNavigate();
      }
    });
    return () => {
      unMount = true;
      unsubscribe();
    };
  }, [fetchDataAndNavigate, navigation, props, setListMyCourse]);

  if (fetchFinish === false) {
    return (
      <View style={[styles.containerIndicator, styles.horizontalIndicator]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          contentContainerStyle={{ paddingBottom: 130 }}
          data={listMyCourse}
          renderItem={({ item, index }) => {
            return (
              <MyCourseItem
                course={item}
                index={index}
                navigation={navigation}
                discription="Asdad"
                afterDelete={fetchDataAndNavigate}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <LinearGradientBottom>
        <ButtomCustome
          height={screenHeight(6)}
          width={screenWidth(70)}
          fontSize={20}
          title="Thêm khóa học khác"
          onPress={() => {
            const { navigation } = props;
            navigation.navigate(LIST_COURSE_SCREEN);
          }}
        />
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
  styleLinearGradient: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerIndicator: {
    width: '100%',
    height: screenHeight(85),
    justifyContent: 'center',
    alignContent: 'center',
  },
  horizontalIndicator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
});
