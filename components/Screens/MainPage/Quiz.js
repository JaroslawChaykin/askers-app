import React, { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Modal } from 'react-native';
import Typography from '../../UI/Typography';
import { useFetching } from '../../../hooks/useFetching';
import { QuizServices } from '../../../API/QuizServices';
import { gStyles } from '../../../assets/style/gStyles';
import LongAnswer from '../../TypesOfAnswer/LongAnswer'
import MultiAnswer from '../../TypesOfAnswer/MultiAnswer'
import ShortAnswer from '../../TypesOfAnswer/ShortAnswer'
import SingleAnswer from '../../TypesOfAnswer/SingleAnswer'
import AskButton from '../../UI/AskButton';
import themes from '../../../constants/_theme.constants';

const Quiz = ({route, navigation}) => {
    const [quiz, setQuiz] = useState({});
    const [modalVisible, setModalVisible] = useState(false);

    const [getQuiz, isLoading, error] = useFetching(async () => {
        const quizResponse = await QuizServices.getQuiz(route.params);
        setQuiz(quizResponse);
    });

    const typesOfQuestions = {
        "long-text": LongAnswer,
        "multi-answer": MultiAnswer,
        "short-text": ShortAnswer,
        "single-answer": SingleAnswer
    }

    const form = () => {
        let questions = []
        for (let key in quiz.questions) {
            const Component = typesOfQuestions[key]
            if(Object.keys(quiz.questions[key]).length > 0) {
                questions.push(<Component question={quiz.questions[key]}/>)
            }
        }
        return questions
    }

    const sendAnswer = () => {
        setModalVisible(true)
        new Promise(res => {
            setTimeout(() => {
                navigation.navigate('Главная')
            }, 3000)
        })
    }
    useEffect(() => {
        getQuiz();
    }, []);

    if(isLoading) return <Typography>Загрузка</Typography>
    if(error) return <Typography>{error}</Typography>

    return (
      <ScrollView style={styles.quiz} showsVerticalScrollIndicator={false}>
          <View style={gStyles.verticalIndent}>
              {
                  form().map((item, index) => (
                    <View key={Date.now() + Math.random()}>
                        <Typography style={styles.count}>{index + 1} Вопрос</Typography>
                        {item}
                    </View>
                  ))
              }
              <AskButton cb={sendAnswer} text={'Отправить ответ'}/>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
            }}
          >
              <View style={styles.sendModal}>
                  <View >
                      <Typography style={styles.text}>Спасибо за ваш ответ!!!</Typography>
                      <Typography style={styles.text}>Сейчас вы будете перенаправлены на главную страницу</Typography>
                  </View>
              </View>
          </Modal>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    sendModal: {
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
      textAlign: 'center'
    },
    quiz: {
        ...gStyles.horizontalBorder,
      marginVertical: 40
    },
    count: {
        fontSize: themes.fontSize.header2,
        fontFamily: themes.fontFamily.bold
    }
})

export default Quiz;