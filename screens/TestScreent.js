/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import Provider from './../context/ContextTest';
import firestore from '@react-native-firebase/firestore';
import Quere from './../helper/Quere';
import Cancel from './../images/cancel.png';
import { screenWidth } from './../helper/SizeScreen';
import FlatListQuiz from './../components/FlatListQuiz';
// import { COURSE_SCREEN } from './../config/ScreenName';

const TestScreen = ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: ' ',
      headerNone: true,
      headerStyle: {
        backgroundColor: '#80d0bb',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    });
  }, [navigation]);

  // const [listAnswer, setListAnswer] = useState([]);
  // React.useEffect(() => {
  //   firestore()
  //     .collection('words')
  //     .where('unitId', '==', 'dlmWpLRDe98qvxLrlVMO')
  //     .get()
  //     .then(res => {
  //       let i = 0;
  //       res.forEach(wordres => {
  //         i++;
  //         let data = wordres.data();
  //         let id = wordres.id;
  //         listWords[data.index] = { id: id, ...data };
  //       });
  //       listWords.length = i;
  //       nextQuestion();
  //     });
  // }, [listWords, nextQuestion]);

  // let listWords = {};
  // let listQuere = [];
  // // init listQuere
  // for (let i = 0; i < 7; i++) {
  //   // khởi tạo queue learning
  //   let quereTmp = new Quere();
  //   if (i === 0) {
  //     quereTmp.setSize(1);
  //   } else if (i === 1) {
  //     quereTmp.setSize(2);
  //   } else if (i === 2) {
  //     quereTmp.setSize(3);
  //   } else if (i === 3) {
  //     quereTmp.setSize(5);
  //   } else {
  //     quereTmp.setSize(7);
  //   }
  //   listQuere.push(quereTmp);
  // }
  // let listWordReview = new Quere();
  // listWordReview.setSize(100);
  // const limitWord = 5;
  // let countWord = 0;
  // let indexLearned = 0;
  // let indexLearning = 0;

  // const checkLearningFinish = () => {
  //   let finish = true;
  //   for (let i = 0; i < 7; i++) {
  //     if (listQuere[i].isEmpty() === false) {
  //       finish = false;
  //     }
  //   }
  //   return finish;
  // };
  // const GenerateAnswerRamdom = index => {
  //   let lsAnswer = [];
  //   const random = Math.floor(Math.random() * 6);
  //   for (let i = 0; i < 6; i++) {
  //     if (index + ((random + i) % 6) < listWords.length) {
  //       lsAnswer.push({
  //         word: listWords[index + ((random + i) % 6)],
  //         isAnswer: (random + i) % 6 === 0,
  //       });
  //     } else {
  //       lsAnswer.push({
  //         word: listWords[index - ((random + i) % 6)],
  //         isAnswer: (random + i) % 6 === 0,
  //       });
  //     }
  //   }
  //   setListAnswer(lsAnswer);
  // };

  // const moveWordToNextQueue = i => {
  //   if (checkLearningFinish() === true) {
  //     console.log('finish roi banj owi okokokokoko');
  //     console.log(listWordReview.length());
  //   } else {
  //     const word = listQuere[i].peek();
  //     GenerateAnswerRamdom(word.index);
  //     Alert.alert(
  //       `hoc lan ${i + 1} :chữ kanji:  ${word.wordOrigin}`,
  //       `nghia : ${word.wordMean}`,
  //       [
  //         {
  //           text: 'Cancel',
  //           onPress: () => console.log('Cancel Pressed'),
  //           style: 'cancel',
  //         },
  //         {
  //           text: 'OK',
  //           onPress: () => {
  //             console.log('OK Pressed');
  //             listQuere[i].dequeue();
  //             if (i === 6) {
  //               listWordReview.enqueue(word);
  //             } else {
  //               listQuere[i + 1].enqueue(word);
  //             }
  //             nextQuestion();
  //           },
  //         },
  //       ],
  //       { cancelable: false },
  //     );
  //   }
  // };

  // const ShowAlert = word => {
  //   Alert.alert(
  //     `chữ kanji:  ${word.wordOrigin}`,
  //     `nghia : ${word.wordMean}`,
  //     [
  //       {
  //         text: 'Cancel',
  //         onPress: () => console.log('Cancel Pressed'),
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'OK',
  //         onPress: () => {
  //           nextQuestion();
  //           console.log('OK Pressed');
  //         },
  //       },
  //     ],
  //     { cancelable: false },
  //   );
  // };

  // const addToListQueue = word => {
  //   listQuere[0].enqueue(word);
  //   GenerateAnswerRamdom(word.index);
  //   ShowAlert(word);
  //   indexLearning++;
  //   countWord++;
  // };

  // const nextQuestion = () => {
  //   // các từ được chuyển qua các queue dựa trên độ ưu tiên là queue nào đó bị đầy ,
  //   // queue nào đầy sẽ được chuyển trước để trảnh trường hợp bị full queue
  //   let queueFullIndex = -1;
  //   for (let i = 0; i < 7; i++) {
  //     if (listQuere[i].isFull() === true) {
  //       queueFullIndex = i;
  //       break;
  //     }
  //   }
  //   if (queueFullIndex === -1) {
  //     if (countWord < limitWord) {
  //       // trường hợp số từ được thêm vào list queue chưa vượt quá giới hạn cho phép
  //       addToListQueue(listWords[indexLearning]);
  //     } else {
  //       // nếu trường hợp không có queue nào đẩy trong danh sách
  //       for (let i = 0; i < 7; i++) {
  //         if (listQuere[i].isEmpty() === false) {
  //           // kiếm queue nào có phần tử để chuyển word từ queue đó sang queue tiêp theo
  //           queueFullIndex = i;
  //           break;
  //         }
  //       }
  //       moveWordToNextQueue(queueFullIndex);
  //     }
  //   } else {
  //     // trường hợp có queue ở vị trí queueFullIndex đầy
  //     moveWordToNextQueue(queueFullIndex);
  //   }
  // };

  return (
    <Provider>
      <FlatListQuiz navigation={navigation} />
    </Provider>
  );
};

export default TestScreen;
const styles = StyleSheet.create({
  scores: {
    paddingHorizontal: screenWidth(7),
    paddingTop: screenWidth(1),
    paddingBottom: screenWidth(1),
    backgroundColor: '#78c5b0',
    marginRight: 10,
    borderRadius: screenWidth(4),
  },
  number: {
    color: '#2a3546',
    fontSize: 15,
    fontWeight: 'bold',
  },
  cancel: {
    height: 24,
    width: 24,
    marginLeft: screenWidth(4),
  },
});
