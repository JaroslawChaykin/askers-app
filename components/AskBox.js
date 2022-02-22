import React, { useContext } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import TitleOfScreen from './TitleOfScreen';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import themes from '../constants/_theme.constants';
import Context from '../Context';

export default function AskBox({deleteQuestion}) {

    const {questions, changeQuestion} = useContext(Context);

    return (
      <View>
          {
              questions.map((question, index) => {
                  return (
                    <View style={styles.askContainer} key={question.key}>
                        <View style={styles.askHeader}>
                            <TitleOfScreen style={styles.titleh1} text={`${index + 1} вопрос`} size={22}/>
                            <View>
                                <TouchableOpacity style={styles.deleteBtn} onPress={() => deleteQuestion(question.key)}>
                                    <AntDesign name="minus" size={24} color="white"/>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View>
                            <View style={styles.inputContainer}>
                                <TextInput style={styles.input}
                                           onChange={(e) => {
                                               changeQuestion({...question, name: e.target.value});
                                           }}
                                           value={question.name}
                                           placeholder={'Название опроса'}/>
                            </View>
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
                  )

              })
          }
      </View>
    );
}

const styles = StyleSheet.create({
    askContainer: {
        marginTop: 35
    },
    askHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    deleteBtn: {
        paddingHorizontal: 10,
        lineHeight: 2,
        backgroundColor: themes.palette.danger,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        borderRadius: 5
    },
    selectAsk: {
        borderWidth: 2,
        borderColor: themes.palette.primaryBlue,
        borderRadius: 5,
        height: 50,
        justifyContent: 'center',
        marginTop: 10,
    },
    input: {
        borderWidth: 2,
        borderColor: themes.palette.primaryBlue,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
        marginTop: 20
    },
});
