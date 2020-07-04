import React, { useContext, useState, useEffect } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context } from './../context/ContextTest';
let styleSelect = {};
const Answer = ({ text, isAnswer }) => {
  const [selected, setSelected] = useState(0);
  const { afterPressTrueAnswer } = useContext(Context);
  const onPressAnswer = () => {
    if (isAnswer) {
      // console.log(' dap an dung roi');
      setSelected(1);
      let a = setTimeout(() => {
        afterPressTrueAnswer();
        clearTimeout(a);
      }, 1000);
    } else {
      // console.log('chonj sai dap an');
      setSelected(-1);
      Alert.alert(
        'Thông báo',
        'bạn chọn sai đáp án rồi, xin vui lòng chọn lại',
        [
          {
            text: 'OK',
            onPress: () => {
              let b = setTimeout(() => {
                setSelected(0);
                clearTimeout(b);
              }, 500);
            },
          },
        ],
        { cancelable: false },
      );
    }
  };
  styleSelect = {};
  useEffect(() => {
    setSelected(0);
  }, [text]);
  if (selected === -1) {
    styleSelect = { backgroundColor: 'red', color: 'white' };
  } else if (selected === 1) {
    styleSelect = { backgroundColor: '#4ead84', color: 'white' };
  }
  return (
    <TouchableOpacity
      onPress={onPressAnswer}
      style={{ ...answerStyle.itemAnswerContainer, ...styleSelect }}>
      <Text style={{ fontSize: 17 }}>{text}</Text>
    </TouchableOpacity>
  );
};
export default Answer;

const answerStyle = StyleSheet.create({
  itemAnswerContainer: {
    width: '48%',
    height: '30%',
    marginHorizontal: '1%',
    borderRadius: 5,
    borderBottomWidth: 0,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    backgroundColor: 'white',
    marginTop: '2%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
