/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import Queue from './../helper/Quere';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const Context = React.createContext();
let listWords = {};
let listQueue = [];
let currentQueue = -1;
let currentWord = {};
let listWordReview = new Queue();
listWordReview.setSize(100);
let countWord = 0;
let indexLearning = 0;
const limitWord = 5;

function Provider(props) {
  const [listAnswer, setListAnswer] = useState([]);
  const [stateView, setStateView] = useState(0);
  const [word, setWord] = useState({});
  useEffect(() => {
    firestore()
      .collection('words')
      .where('unitId', '==', 'dlmWpLRDe98qvxLrlVMO')
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
        for (let i = 0; i < 7; i++) {
          // khởi tạo queue learning
          let queueTmp = new Queue();
          if (i === 0) {
            queueTmp.setSize(1);
          } else if (i === 1) {
            queueTmp.setSize(2);
          } else if (i === 2) {
            queueTmp.setSize(3);
          } else if (i === 3) {
            queueTmp.setSize(5);
          } else {
            queueTmp.setSize(7);
          }
          listQueue.push(queueTmp);
        }
        nextQuestion();
      });
  }, []);

  // init listQuere
  // let indexLearned = 0;

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
          word: listWords[index + ((random + i) % 6)],
          isAnswer: (random + i) % 6 === 0,
        });
      } else {
        lsAnswer.push({
          word: listWords[index - ((random + i) % 6)],
          isAnswer: (random + i) % 6 === 0,
        });
      }
    }
    setListAnswer(lsAnswer);
  };

  const moveWordToNextQueue = () => {
    if (checkLearningFinish() === true) {
      console.log('finish roi banj owi okokokokoko');
      console.log(listWordReview.length());
    } else {
      currentWord = listQueue[currentQueue].peek();
      //console.log(currentWord);
      setWord(currentWord);
      setStateView(1);
      GenerateAnswerRamdom();
    }
  };

  const addToListQueue = () => {
    const wordNew = listWords[indexLearning];
    listQueue[0].enqueue(wordNew);
    console.log(listQueue[0]);
    // console.log(listWords[indexLearning]);
    setStateView(0);
    setWord(wordNew);
    // GenerateAnswerRamdom(listWords[indexLearning].index); a
    indexLearning++;
    countWord++;
  };

  const nextQuestion = () => {
    // các từ được chuyển qua các queue dựa trên độ ưu tiên là queue nào đó bị đầy ,
    // queue nào đầy sẽ được chuyển trước để trảnh trường hợp bị full queue
    let queueFullIndex = -1;
    console.log('print queue');
    for (let i = 0; i < 7; i++) {
      console.log(listQueue[i]);
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
    // console.log(currentQueue);
    listQueue[currentQueue].dequeue();
    if (currentQueue === 6) {
      listWordReview.enqueue(currentWord);
    } else {
      listQueue[currentQueue + 1].enqueue(currentWord);
    }
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
