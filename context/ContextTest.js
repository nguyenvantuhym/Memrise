/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, createContext, useContext } from 'react';
import { Alert } from 'react-native';
import Queue from '../helper/Queue';
import firestore from '@react-native-firebase/firestore';
import { ContextUser } from './../context/ContextUser';
import { initListQueue, rebootQueue } from './../helper/initListQuere';

const Context = createContext();

let listWords = {};
let listQueue = [];
let currentQueue = -1;
let currentWord = {};
let listWordReview = new Queue();
listWordReview.setSize(100);
let countWord = 0;
let indexLearning = 0;
let indexLearned = 0;
const limitWord = 5;

function Provider(props) {
  const {
    myCourseCurrent,
    setMyCourseCurrent,
    indexCurrentUnit,
    listMyCourse,
    indexMyCourseCurrent,
    user,
  } = useContext(ContextUser);
  const [listAnswer, setListAnswer] = useState([]);
  const [stateView, setStateView] = useState(0);
  const [word, setWord] = useState({});
  const currentUnit = myCourseCurrent.unitList[indexCurrentUnit];
  indexLearning =
    currentUnit.indexLearning === undefined ? 0 : currentUnit.indexLearning;
  indexLearned =
    currentUnit.indexLearned === undefined ? 0 : currentUnit.indexLearned;
  listQueue =
    currentUnit.listQueue === undefined
      ? initListQueue()
      : rebootQueue(currentUnit.listQueue);
  useEffect(() => {
    firestore()
      .collection('words')
      .where('unitId', '==', currentUnit.unitId)
      .get()
      .then(res => {
        let i = 0;
        res.forEach(wordres => {
          i++;
          let data = wordres.data();
          let id = wordres.id;
          listWords[data.index] = { id: id, ...data };
        });
        listWords.length = i;
        console.log('init listQueue');
        nextQuestion();
      });
  }, []);

  const checkLearningFinish = () => {
    let finish = true;
    for (let i = 0; i < 7; i++) {
      if (listQueue[i].isEmpty() === false) {
        finish = false;
      }
    }
    return finish;
  };
  const GenerateAnswerRamdom = () => {
    const index = currentWord.index;
    // console.log(index);
    let lsAnswer = [];
    const random = Math.floor(Math.random() * 6);
    for (let i = 0; i < 6; i++) {
      if (index + ((random + i) % 6) < listWords.length) {
        lsAnswer.push({
          currentQueue: currentQueue,
          word: listWords[index + ((random + i) % 6)],
          isAnswer: (random + i) % 6 === 0,
        });
      } else {
        lsAnswer.push({
          currentQueue: currentQueue,
          word: listWords[index - ((random + i) % 6)],
          isAnswer: (random + i) % 6 === 0,
        });
      }
    }
    setListAnswer(lsAnswer);
  };

  const moveWordToNextQueue = () => {
    if (checkLearningFinish() === true) {
      Alert.alert(
        'Thông báo',
        'bạn đã học hoàn thành 5 từ mới, bạn có muốn học tiếp ?',
        [
          {
            text: 'Có',
            onPress: () => {
              countWord = 0;
              nextQuestion();
            },
          },
          {
            text: 'không',
            onPress: () => {
              props.navigation.goBack();
            },
          },
        ],
        { cancelable: false },
      );
      console.log('finish roi banj owi okokokokoko');
    } else {
      currentWord = listQueue[currentQueue].peek();
      setWord(currentWord);
      setStateView(1);
      GenerateAnswerRamdom();
    }
  };

  const addToListQueue = () => {
    const wordNew = listWords[indexLearning];
    console.log(listQueue[0]);
    listQueue[0].enqueue(wordNew);
    // console.log(listWords[indexLearning]);

    // GenerateAnswerRamdom(listWords[indexLearning].index);
    setMyCourseCurrent({
      ...myCourseCurrent,
      unitList: [
        ...myCourseCurrent.unitList.slice(0, indexCurrentUnit),
        {
          ...currentUnit,
          listQueue: listQueue,
          indexLearned,
          indexLearning: indexLearning + 1,
        },
        ...myCourseCurrent.unitList.slice(indexCurrentUnit + 1),
      ],
    });
    firestore()
      .collection('myCourses')
      .doc(user.uid)
      .update({
        listCourse: [
          ...listMyCourse.slice(0, indexMyCourseCurrent),
          {
            ...myCourseCurrent,
            unitList: [
              ...myCourseCurrent.unitList.slice(0, indexCurrentUnit),
              {
                ...currentUnit,
                indexLearned,
                listQueue: listQueue,
                indexLearning: indexLearning + 1,
              },
              ...myCourseCurrent.unitList.slice(indexCurrentUnit + 1),
            ],
          },
          ...listMyCourse.slice(indexMyCourseCurrent + 1),
        ],
      })
      .then(res => {
        console.log('update roi nhes');
      });
    setStateView(0);
    setWord(wordNew);
    // indexLearning++;
    countWord++;
  };

  const nextQuestion = () => {
    // các từ được chuyển qua các queue dựa trên độ ưu tiên là queue nào đó bị đầy ,
    // queue nào đầy sẽ được chuyển trước để trảnh trường hợp bị full queue
    let queueFullIndex = -1;
    for (let i = 0; i < 7; i++) {
      // console.log(listQueue[i]);
      if (listQueue[i].isFull() === true) {
        queueFullIndex = i;
        break;
      }
    }
    //console.log(queueFullIndex);
    if (queueFullIndex === -1) {
      if (countWord < limitWord) {
        // trường hợp số từ được thêm vào list queue chưa vượt quá giới hạn cho phép
        currentWord = listWords[indexLearning];
        addToListQueue();
      } else {
        // nếu trường hợp không có queue nào đẩy trong danh sách
        for (let i = 0; i < 7; i++) {
          if (listQueue[i].isEmpty() === false) {
            // kiếm queue nào có phần tử để chuyển word từ queue đó sang queue tiêp theo
            queueFullIndex = i;
            break;
          }
        }
        currentQueue = queueFullIndex;
        moveWordToNextQueue(queueFullIndex);
      }
    } else {
      // trường hợp có queue ở vị trí queueFullIndex đầy
      // currentWord = listWords[indexLearning];
      currentQueue = queueFullIndex;
      moveWordToNextQueue();
    }
  };
  const afterPressTrueAnswer = () => {
    // console.log(myCourseCurrent);
    listQueue[currentQueue].dequeue();
    if (currentQueue === 6) {
      listWordReview.enqueue(currentWord);
      indexLearned++;
    } else {
      listQueue[currentQueue + 1].enqueue(currentWord);
    }
    setMyCourseCurrent({
      ...myCourseCurrent,
      unitList: [
        ...myCourseCurrent.unitList.slice(0, indexCurrentUnit),
        {
          ...currentUnit,
          indexLearned,
          listQueue: listQueue,
        },
        ...myCourseCurrent.unitList.slice(indexCurrentUnit + 1),
      ],
    });
    firestore()
      .collection('myCourses')
      .doc(user.uid)
      .update({
        listCourse: [
          ...listMyCourse.slice(0, indexMyCourseCurrent),
          {
            ...myCourseCurrent,
            unitList: [
              ...myCourseCurrent.unitList.slice(0, indexCurrentUnit),
              {
                ...currentUnit,
                indexLearned,
                listQueue: listQueue,
              },
              ...myCourseCurrent.unitList.slice(indexCurrentUnit + 1),
            ],
          },
          ...listMyCourse.slice(indexMyCourseCurrent + 1),
        ],
      })
      .then(res => {
        console.log('update roi nhes');
      });

    nextQuestion();
  };

  const value = {
    listAnswer,
    nextQuestion,
    afterPressTrueAnswer,
    stateView,
    word,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
}

export default Provider;
export { Context };
