import React, { useContext, useEffect, useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import Typography from '../../UI/Typography';
import themes from '../../../constants/_theme.constants';
import { AntDesign } from '@expo/vector-icons';
import FullSurveyPreview from '../../FullSurveyPreview';
import { useFetching } from '../../../hooks/useFetching';
import { QuizServices } from '../../../API/QuizServices';
import QuizzesContext from '../../../contexts/QuizzesContext';


export default function Main({navigation}) {
    const {quizzes, setQuizzesFromResolve} = useContext(QuizzesContext)

    const [getQuizzes, isLoading, error] = useFetching(async () => {
        const quizzesResponse = await QuizServices.getQuizzes();
        setQuizzesFromResolve(quizzesResponse);
    });

    useEffect(() => {
        getQuizzes()
    }, []);

    if(isLoading) return <Typography>Загрузка</Typography>
    if(error) return <Typography>{error}</Typography>

    return (
      <View style={gStyles.container}>
          <Typography style={styles.title}>Поиск по ФИО или ОП</Typography>
          <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder={'ФИО, образовательная программа'}/>
              <AntDesign style={styles.icon} name="search1" size={19} color="#1F69FF"/>
          </View>
          <Typography style={styles.title}>Популярные опросы</Typography>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={quizzes}
            renderItem={({item}) => (<FullSurveyPreview item={item} navigation={navigation}/>)}/>
      </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
        marginBottom: 10,
        marginHorizontal: 20
    },
    input: {
        ...gStyles.input,
        paddingLeft: 47,
        width: '100%',
    },
    title: {
        ...gStyles.title,
        marginTop: 22,
        marginHorizontal: 20
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 18
    },
    selectAsk: {
        backgroundColor: themes.palette.white,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        marginTop: 10,
    }
});
