import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  ProgressBarAndroid,
  Alert,
} from 'react-native';
import deleteicon from './../asset/delete.png';

import {screenWidth} from './../helper/SizeScreen';

function MyCourseItem(props) {
  const {course} = props;
  return (
    <TouchableWithoutFeedback>
      <View style={styles.courseItem}>
        <View style={styles.img}>
          <Image source={{uri: course.imgLogo}} style={styles.imgRound} />
        </View>
        <View style={styles.header}>
          <View style={styles.HeaderMain}>
            <View style={styles.HeaderTitle}>
              <View style={styles.header}>
                <Text style={{fontSize: 13, fontWeight: 'bold'}}>
                  {course.courseName}
                </Text>
                <Text style={{fontSize: 11}}>tututut</Text>
              </View>
              <TouchableWithoutFeedback
                onPress={() => {
                  Alert.alert(
                    'Cảnh báo',
                    `Bạn có thực sự muốn xóa khóa học ${course.courseName}`,
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('OK Pressed'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => {}},
                    ],
                    {cancelable: false},
                  );
                }}>
                <View style={styles.iconDelete}>
                  <Image source={deleteicon} style={styles.imgDelete} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <ProgressBarAndroid
            styleAttr="Horizontal"
            indeterminate={false}
            progress={0.5}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default MyCourseItem;

const styles = StyleSheet.create({
  imgRound: {
    width: screenWidth(13),
    height: screenWidth(13),
    borderRadius: 50,
    marginRight: 10,
    overflow: 'hidden',
    borderWidth: 3,
  },
  imgDelete: {
    width: screenWidth(5),
    height: screenWidth(5),
    marginRight: 10,
  },
  header: {
    flex: 8,
  },
  HeaderMain: {
    flexDirection: 'column',
  },
  HeaderTitle: {
    flexDirection: 'row',
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
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
