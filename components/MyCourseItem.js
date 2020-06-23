import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  ProgressBarAndroid,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';

import deleteicon from './../asset/delete.png';
import { Context } from './../context/ContextUser';
import { screenWidth } from './../helper/SizeScreen';
import { COURSE_SCREEN } from '../config/ScreenName';

function MyCourseItem(props) {
  const { user } = useContext(Context);
  const { course } = props;
  const deleteCourse = () => {
    const mycourseRef = firestore()
      .collection('myCourses')
      .doc(user.uid);
    firestore()
      .runTransaction(transaction => {
        return transaction.get(mycourseRef).then(mycoursedata => {
          if (!mycoursedata.exists) {
            throw 'Document does not exist!';
          }
          const newMyCourseData = mycoursedata
            .data()
            .listCourse.filter(item => course.id !== item.id);
          transaction.update(mycourseRef, {
            listCourse: newMyCourseData,
          });
        });
      })
      .then(function() {
        props.afterDelete();
        console.log('Transaction successfully committed!');
      })
      .catch(function(error) {
        console.log('Transaction failed: ', error);
      });
  };

  const showAlert = () => {
    Alert.alert(
      'Cảnh báo',
      `Bạn có thực sự muốn xóa khóa học ${course.courseName}`,
      [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('vantu');
          },
          style: 'cancel',
        },
        { text: 'OK', onPress: deleteCourse },
      ],
      { cancelable: false },
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() =>
        props.navigation.navigate(COURSE_SCREEN, { id: course.id })
      }>
      <View style={styles.courseItem}>
        <View style={styles.img}>
          <Image source={{ uri: course.imgLogo }} style={styles.imgRound} />
        </View>
        <View style={styles.header}>
          <View style={styles.HeaderMain}>
            <View style={styles.HeaderTitle}>
              <View style={styles.header}>
                <Text style={{ fontSize: 13, fontWeight: 'bold' }}>
                  {course.courseName}
                </Text>
                <Text style={{ fontSize: 11 }}>tututut</Text>
              </View>
              <TouchableWithoutFeedback onPress={showAlert}>
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
