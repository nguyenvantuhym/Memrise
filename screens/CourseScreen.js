/* eslint-disable prettier/prettier */
import React, {useEffect, useState, useContext} from 'react';
import { View, StyleSheet, Text, FlatList} from 'react-native';
import ButtomCustome from './../components/ButtonCutome';
import {screenHeight, screenWidth} from './../helper/SizeScreen';
import { Context } from './../context/ContextUser';

import ProgressSection from './../components/progressSection';
import LinearGradientBottom from '../components/LinearGradientBottom';
import firestore from '@react-native-firebase/firestore';
import { TEST_SCREEN } from '../config/ScreenName';

function MyCourseScreen({route, navigation}) {
  const { myCourseCurrent } = useContext(Context);
  const [course, setCourse] = useState([]);
  const [title , setTitle] = useState('');
  const { id } = myCourseCurrent;
  const { unitList } = course;
  const myUnitList = myCourseCurrent.unitList;
  React.useLayoutEffect(() => {
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
    // if (id !== undefined) {
    //   firestore().collection('units').where('courseId', '==', id).get()
    //     .then(res1 => {
    //       let resListSection = [];
    //       res1.forEach(doc => {
    //         // doc.data() is never undefined for query doc snapshots
    //         resListSection.push({ id: doc.id, ...doc.data() });
    //       });
    //       resListSection.sort((a, b) => a.index - b.index);
    //       setListSection(resListSection);
    //       // console.log(listSection);
    //     });
    // }
  }, [id]);

  return (
    <View style={styles.screen}>
      <View style={styles.listSectionCourse}>
        <FlatList
          contentContainerStyle={{paddingBottom: 130}}
          ListEmptyComponent={()=> <View><Text>vantu</Text></View>}
          data={unitList}
          renderItem={({item, index }) => {
            return <ProgressSection navigation={navigation} unit={item} myUnit={myUnitList[index]}/>;
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
export default MyCourseScreen;

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
});
