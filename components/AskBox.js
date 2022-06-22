import React, { useContext, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import FormQuizContext from '../contexts/FormQuizContext';
import AskButton from './UI/AskButton';
import Typography from './UI/Typography';
import themes from '../constants/_theme.constants';
import { gStyles } from '../assets/style/gStyles';
import LongQuestion from './TypesOfQuestions/LongQuestion';
import MultiQuestion from './TypesOfQuestions/MultiQuestion';
import ShortQuestion from './TypesOfQuestions/ShortQuestion';
import SingleQuestion from './TypesOfQuestions/SingleQuestion';

export default function AskBox({question, deleteQuestion, changeQuestion, index}) {

    const [selectedType, setSelectedType] = useState("1");
    const [ask, setAsk] = useState({
        title: '',
    });

    const typesOfQuestions = {
        "1": ShortQuestion,
        "2": LongQuestion,
        "3": SingleQuestion,
        "4": MultiQuestion
    }
    const renderTypeQuestion = () => {
        const Component = typesOfQuestions[selectedType]
        return <Component/>
    }

    return (
      <View style={styles.question} key={question.key}>
          <View style={styles.questionHeader}>
              <Typography style={styles.title}>{`${index + 1} вопрос`}</Typography>
              <AskButton
                style={styles.deleteBtn}
                cb={() => deleteQuestion(question.key)}
                text={<AntDesign name="minus" size={24} color="white"/>}
              />
          </View>
          <View>
              <TextInput style={styles.input}
                         onChange={text => {
                             setAsk({...ask, title: text})
                             changeQuestion({...question, name: text});
                         }}
                         value={ask.title}
                         placeholder={'Ваш вопрос'}/>
              <View style={styles.selectAsk}>
                  <Picker
                    selectedValue={selectedType}
                    onValueChange={(itemValue) => {
                        setSelectedType(itemValue)
                        changeQuestion({...question, selected: itemValue});
                    }}
                  >
                      <Picker.Item label={'Ответ строка'} value={"1"}/>
                      <Picker.Item label={'Ответ абзац'} value={"2"}/>
                      <Picker.Item label={'Один из списка'} value={"3"}/>
                      <Picker.Item label={'Несколько из списка'} value={"4"}/>
                  </Picker>
              </View>
              <View style={styles.typeQuestion}>
                  {
                      renderTypeQuestion()
                  }
              </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    typeQuestion: {
      marginVertical: 10
    },
    title: {
        fontSize: themes.fontSize.header3,
        fontFamily: themes.fontFamily.bold
    },
    question: {
        marginTop: 35,
    },
    questionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    deleteBtn: {
        paddingHorizontal: 10,
        backgroundColor: themes.palette.danger,
        borderRadius: 5
    },
    selectAsk: {
        backgroundColor: themes.palette.white,
        borderRadius: 5,
        paddingLeft: 10,
        marginTop: 10,
        shadowColor: themes.palette.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
    },
    input: {
        ...gStyles.input,
        marginTop: 20,
        width: '100%'
    },
});
