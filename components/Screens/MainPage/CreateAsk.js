import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import TitleOfScreen from '../../TitleOfScreen';
import AskBox from '../../AskBox';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';

export default function CreateAsk() {

  const [questions, setQuestions] = useState([
    {name: '12421', selected: '1', key: 1},
    {name: 'grere', selected: '3', key: 2},
    {name: '124ef33321', selected: '1', key: 3},
    {name: 'sss', selected: '2', key: 4},
  ])


  const changeQuestion = (newQuestion) => {
    setQuestions(questions.map(item => {
      if(item.key === newQuestion.key) {
        return newQuestion
      } else {
        return item
      }
    }))
  }

  const addQuestion = () => {
    setQuestions(() => {
      return [
        ...questions,
        {key: Date.now(), name: '', selected: '1'},
      ]
    })
  }

  const deleteQuestion = (key) => {
    setQuestions((list) => {
      return list.filter(countAsk => countAsk.key !== key)
    })
  }

  return (
    <ScrollView style={gStyles.container}>
      <View style={styles.pb40}>
        <TitleOfScreen text={'Название опроса'} size={28} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={'Название опроса'} />
        </View>
        <View >
          {
            questions.map((question, index) => {
              return (
                <AskBox question={question} changeQuestion={changeQuestion} count={index+1} key={question.key} deleteQuestion={deleteQuestion}/>
              )
            })
          }
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={addQuestion}>
            <Text style={styles.buttonText}>Добавить вопрос</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );


}

const styles = StyleSheet.create({
  pb40: {
    paddingBottom: 150
  },
  input: {
    borderWidth: 2,
    borderColor: themes.palette.primaryBlue,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 20
  },
  buttonBox: {
    flexDirection: 'row'
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: themes.palette.primaryBlue,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 17,
    color: themes.palette.black
  }
});
