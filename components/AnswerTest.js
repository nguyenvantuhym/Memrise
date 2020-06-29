import React, { useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context } from './../context/ContextTest';
const Answer = ({ text, isAnswer }) => {
  const { afterPressTrueAnswer } = useContext(Context);
  const onPressAnswer = () => {
    if (isAnswer) {
      console.log(' dap an dung roi');
      afterPressTrueAnswer();
    } else {
      console.log(' dap an sai roi');
    }
  };

  return (
    <TouchableOpacity
      onPress={onPressAnswer}
      style={answerStyle.itemAnswerContainer}>
      <View>
        <Text>{text}</Text>
      </View>
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
    marginTop: '2%',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
