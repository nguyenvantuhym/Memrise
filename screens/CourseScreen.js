import React, {useEffect, useState} from 'react';
import {View, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressSection from './../components/progressSection';

import firestore from '@react-native-firebase/firestore';
import {FlatList} from 'react-native-gesture-handler';

function MyCourseScreen({navigation}) {
  const [listSection, setListSection] = useState([]);
  // const courses = await firestore()
  //   .collection('courses')
  //   .where('language', '==', 'japanese')
  //   .get();
  // console.log(courses);
  // courses.forEach(function(doc) {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id, ' => ', doc.data());
  // });
  useEffect(() => {
    setListSection([
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
      {id: 8},
      {id: 9},
      {id: 10},
    ]);
  }, [setListSection]);

  return (
    <View style={styles.screen}>
      <View style={styles.listSectionCourse}>
        <FlatList
          data={listSection}
          renderItem={({item}) => {
            return <ProgressSection navigation={navigation} />;
          }}
          keyExtractor={item => item.id.toString()}
        />
      </View>

      <LinearGradient
        colors={['transparent', '#fff']}
        style={styles.LinearGradientStyle}>
        <View />
      </LinearGradient>
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
