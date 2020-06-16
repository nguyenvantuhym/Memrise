import React from 'react';
import {View, Text, Image, StyleSheet, ProgressBarAndroid} from 'react-native';
import Img from './../asset/8909488000151101173929.jpg';

function CourseItem() {
  return (
    <View style={styles.courseItem}>
      <View style={styles.img}>
        <Image source={Img} style={styles.imgRound} />
      </View>
      <View style={styles.content}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Somatome N3 </Text>
        <Text style={{fontSize: 12}}>tututut</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
    </View>
  );
}
export default CourseItem;

const styles = StyleSheet.create({
  imgRound: {
    width: '100%',
    height: '80%',
    // borderRadius: 50,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 3,
  },
  content: {
    flex: 9,
  },
  img: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseItem: {
    marginTop: 30,
    width: '95%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
