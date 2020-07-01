/* eslint-disable prettier/prettier */
import React, { useEffect, useLayoutEffect, useState, useContext} from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import ButtomCustome from './../components/ButtonCutome';
import {screenHeight, screenWidth} from './../helper/SizeScreen';
import { ContextUser } from './../context/ContextUser';

import ProgressSection from './../components/progressSection';
import LinearGradientBottom from '../components/LinearGradientBottom';
import firestore from '@react-native-firebase/firestore';
import { TEST_SCREEN } from '../config/ScreenName';

function CourseScreen({route, navigation}) {
  const { myCourseCurrent } = useContext(ContextUser);
  const [course, setCourse] = useState([]);
  const [title , setTitle] = useState('');
  const { id } = myCourseCurrent;
  const { unitList } = course;
  const myUnitList = myCourseCurrent.unitList;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    });
  }, [navigation, title]);
  useEffect(() => {
    if (id !== undefined) {
      firestore().collection('courses').doc(id).get()
        .then(res => {
          setCourse(res.data());
          console.log(res.data().courseName);
          setTitle(res.data().courseName);
        });
    } else {

    }
  }, [id]);

  return (
    <View style={styles.screen}>
      <View style={styles.listSectionCourse}>
        <FlatList
          contentContainerStyle={{paddingBottom: 130}}
          ListEmptyComponent={() => <View style={[styles.containerIndicator, styles.horizontalIndicator]}>
             <ActivityIndicator size="large" color="#0000ff" />
          </View>}
          data={unitList}
          renderItem={({item, index }) => {
            return <ProgressSection navigation={navigation} index={index} unit={item} myUnit={myUnitList[index]}/>;
          }}
          keyExtractor={item => item.unitId}
        />
      </View>

      <LinearGradientBottom>
          <ButtomCustome
            height={screenHeight(6)}
            width={screenWidth(70)}
            fontSize={20}
            title="Ôn tập thông thường"
            onPress={() => {
              navigation.navigate(TEST_SCREEN);
            }}
          />
      </LinearGradientBottom>
    </View>
  );
}
export default CourseScreen;

const styles = StyleSheet.create({
  listSectionCourse: {
    height: '100%',
    flex: 1,
  },
  screen: {
    position: 'relative',
    backgroundColor: '#fdfaf3',
    height: '100%',
  },
  LinearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
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
    alignContent:'center',
  },
});
