import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressSection from './../components/progressSection';

import firestore from '@react-native-firebase/firestore';

class CourseScreen extends React.Component {
  componentDidMount = async () => {
    const courses = await firestore()
      .collection('courses')
      .where('language', '==', 'japanese')
      .get();
    console.log(courses);
    courses.forEach(function(doc) {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  };

  render() {
    return (
      <View style={styles.screen}>
        <ScrollView>
          <View style={styles.listSectionCourse}>
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
            <ProgressSection />
          </View>
        </ScrollView>
        <LinearGradient
          colors={['transparent', '#fff']}
          style={styles.LinearGradientStyle}>
          <View />
        </LinearGradient>
      </View>
    );
  }
}
export default CourseScreen;

const styles = StyleSheet.create({
  listSectionCourse: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screen: {
    position: 'relative',
    backgroundColor: '#fdfaf3',
  },
  LinearGradientStyle: {
    position: 'absolute',
    bottom: 0,
    height: 150,
    width: '100%',
  },
});
