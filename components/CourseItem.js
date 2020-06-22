import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ProgressBarAndroid,
  Dimensions,
} from 'react-native';
import Img from './../asset/8909488000151101173929.jpg';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const screenWidth = percent => (deviceWidth * percent) / 100;
const screenHeight = percent => (deviceHeight * percent) / 100;

function CourseItem(props) {
  return (
    <View style={styles.courseItem}>
      <View style={styles.img}>
        <Image source={Img} style={styles.imgRound} />
      </View>
      <View style={styles.content}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>
          {props.courseName}
        </Text>
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
    width: screenWidth(13),
    height: screenWidth(12),
    borderRadius: 50,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 3,
  },
  content: {
    flex: 8,
  },
  img: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  courseItem: {
    flex: 1,
    height: 70,
    marginHorizontal: 10,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
