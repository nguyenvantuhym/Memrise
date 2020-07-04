import React, { useContext } from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { screenWidth } from '../helper/SizeScreen';
import { ContextUser } from './../context/ContextUser';
import { MY_COURSE_SCREEN } from '../config/ScreenName';

function CourseItem(props) {
  const { user } = useContext(ContextUser);
  const { course } = props;
  const {description} = course;
  const AddCourse = () => {
    const mycourseRef = firestore()
      .collection('myCourses')
      .doc(user.uid);
    firestore()
      .runTransaction(transaction => {
        return transaction.get(mycourseRef).then(mycoursedata => {
          if (!mycoursedata.exists) {
            throw 'Document does not exist!';
          }
          mycoursedata.data().listCourse.push({
            id: course.id,
            courseName: course.courseName,
            imgLogo: course.imgLogo,
            wordLearnedNumber: 0,
            wordLearningNumber: 0,
            listLearning: [],
            listLearned: [],
            unitList: course.unitList.map(unit => ({
              unitId: unit.unitId,
              wordLearnedNumber: 0,
              wordLearningNumber: 0,
            })),
            wordNumber: course.wordNumber,
          });
          // console.log(mycoursedata.data().listCourse);
          transaction.update(mycourseRef, {
            listCourse: mycoursedata.data().listCourse,
          });
        });
      })
      .then(function() {
        Alert.alert(
          'Thông báo',
          `Bạn thêm thành công khóa học ${course.courseName}`,
          [{ text: 'OK' }],
          { cancelable: false },
        );
        props.navigation.navigate(MY_COURSE_SCREEN);
        console.log('Transaction successfully committed!');
      })
      .catch(function(error) {
        console.log('Transaction failed: ', error);
      });
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Alert.alert(
          'Thông báo',
          `Bạn có thực sự muốn thêm khóa học ${course.courseName}?`,
          [
            {
              text: 'Cancel',
              onPress: () => console.log('OK Pressed'),
              style: 'cancel',
            },
            { text: 'OK', onPress: AddCourse },
          ],
          { cancelable: false },
        );
      }}>
      <View style={styles.courseItem}>
        <View style={styles.img}>
          <Image source={{ uri: course.imgLogo }} style={styles.imgRound} />
        </View>
        <View style={styles.content}>
          <Text style={{ fontSize: 15, fontWeight: 'bold' }}>
            {course.courseName}
          </Text>
          <Text style={{ fontSize: 12 }}>{description}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default CourseItem;

const styles = StyleSheet.create({
  imgRound: {
    width: screenWidth(13),
    height: screenWidth(13),
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
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
