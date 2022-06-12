import React, { useState } from 'react';
import { ScrollView, StyleSheet, TextInput, View } from 'react-native';
import AskBox from '../../AskBox';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';
import FormQuizContext from '../../../contexts/FormQuizContext';
import AskButton from '../../UI/AskButton';
import Typography from '../../UI/Typography';

export default function CreateAsk() {

    const [questions, setQuestions] = useState([
        {name: '12421', selected: '1', key: 1},
        {name: 'grere', selected: '3', key: 2},
        {name: '124ef33321', selected: '1', key: 3},
        {name: 'sss', selected: '2', key: 4},
    ]);

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
              <View>
                  <Typography style={styles.title}>Название опроса</Typography>
                  <View style={{marginHorizontal: 20}}>
                      <TextInput style={styles.input} placeholder={'Название опроса'}/>
                  </View>
                  <AskBox deleteQuestion={deleteQuestion}/>
                  <View style={{alignItems: 'flex-start'}}>
                      <AskButton
                        style={styles.button}
                        cb={addQuestion}
                        text={'Добавить вопрос'}
                      />
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
        marginHorizontal: 20
    },
    input: {
        ...gStyles.input,
        width: '100%',
        marginTop: 20,
    },
    button: {
        ...gStyles.button,
        backgroundColor: 'transparent',
        color: themes.palette.primary,
        marginTop: 20,
    },
});
