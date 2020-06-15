import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import ProgressSection from './../components/progressSection';

function CourseScreen() {
  return (
    <View style={{position: "relative", backgroundColor: "#fdfaf3"}}>
    <ScrollView>
      <View style={{  flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
    <LinearGradient colors={['transparent', '#fff']} style={{
        position:"absolute",
        bottom: 0,
        height: 150,
        width: "100%"
      }} >
      <View >
      </View>
    </LinearGradient>
    </View>
  );
}
export default CourseScreen;