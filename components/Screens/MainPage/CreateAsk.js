import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import AskBox from '../../AskBox';
import { gStyles } from '../../../assets/style/gStyles';
import FormQuizContext from '../../../contexts/FormQuizContext';
import AskButton from '../../UI/AskButton';
import Typography from '../../UI/Typography';

export default function CreateAsk() {

    const [questions, setQuestions] = useState([]);

    const [quiz, setQuiz] = useState({
        title: '',
        description: ''
    });

    const changeQuestion = (newQuestion) => {
        setQuestions(questions.map(item => newQuestion.key === item.key ? newQuestion : item));
    };

    const addQuestion = () => {
        setQuestions(() => {
            return [
                ...questions,
                {key: Date.now(), name: '', selected: '1'},
            ];
        });
    };

    const deleteQuestion = (key) => {
        setQuestions((list) => {
            return list.filter(countAsk => countAsk.key !== key);
        });
    };

    return (
      <FormQuizContext.Provider value={{questions, changeQuestion}}>
          <ScrollView style={gStyles.container}>
              <View style={gStyles.horizontalBorder}>
                  <View>
                      <Typography style={styles.title}>Название опроса</Typography>
                      <View>
                          <TextInput style={styles.input}
                                     value={quiz.title}
                                     onChangeText={text => setQuiz({...quiz, title: text})}
                                     placeholder={'Название опроса'}/>
                          <TextInput style={styles.area}
                                     multiline
                                     numberOfLines={5}
                                     value={quiz.title}
                                     onChangeText={text => setQuiz({...quiz, title: text})}
                                     placeholder={'Название опроса'}/>
                      </View>
                      {
                          questions.map((item, index) => (
                            <AskBox question={item}
                                    index={index}
                                    changeQuestion={changeQuestion}
                                    deleteQuestion={deleteQuestion}/>
                          ))
                      }
                      <View style={styles.button}>
                          <View>
                              <AskButton
                                cb={addQuestion}
                                text={'Добавить вопрос'}
                              />
                          </View>
                      </View>
                  </View>
              </View>
          </ScrollView>
      </FormQuizContext.Provider>
    );


}

const styles = StyleSheet.create({
    title: {
        ...gStyles.title,
        marginTop: 22,
    },
    input: {
        ...gStyles.input,
        width: '100%',
        marginTop: 20,
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginVertical: 20
    },
    area: {
        ...gStyles.input,
        marginTop: 5,
        marginBottom: 5,
        borderRadius: 5,
        textAlignVertical: 'top'
    }
});
