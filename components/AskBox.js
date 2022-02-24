import React, { useContext } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import Context from '../Context';
import AskButton from './UI/AskButton';
import Typography from './UI/Typography';

import themes from '../constants/_theme.constants';
import { gStyles } from '../assets/style/gStyles';

export default function AskBox({deleteQuestion}) {

    const {questions, changeQuestion} = useContext(Context);

    return (
      <View>
          {
              questions.map((question, index) => {
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
                                       onChange={(e) => {
                                           changeQuestion({...question, name: e.target.value});
                                       }}
                                       value={question.name}
                                       placeholder={'Ваш вопрос'}/>
                            <View style={styles.selectAsk}>
                                <Picker
                                  selectedValue={question.selected}
                                  onValueChange={(itemValue) => {
                                      changeQuestion({...question, selected: itemValue});
                                  }}
                                >
                                    <Picker.Item label={'Один вариант ответа'} value={'1'}/>
                                    <Picker.Item label={'Два варианта ответа'} value={'2'}/>
                                    <Picker.Item label={'Три варианта ответа'} value={'3'}/>
                                </Picker>
                            </View>
                        </View>
                    </View>
                  );

              })
          }
      </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: themes.fontSize.header3,
        fontFamily: themes.fontFamily.bold
    },
    question: {
        marginTop: 35
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
        borderWidth: 1,
        borderColor: themes.palette.primaryBlue,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
    },
    input: {
        ...gStyles.input,
        marginTop: 20,
        width: '100%'
    },
});
