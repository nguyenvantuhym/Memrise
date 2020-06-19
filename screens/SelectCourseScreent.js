import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CourseItem from './../components/CourseItem';

function SelectCourseScreen() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
          <CourseItem />
        </View>
      </ScrollView>
      <LinearGradient
        colors={['transparent', '#fff']}
        style={styles.LinearGradient}>
        <View />
      </LinearGradient>
    </View>
  );
}
export default SelectCourseScreen;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: '#fdfaf3',
    height: '100%',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  LinearGradient: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
});
