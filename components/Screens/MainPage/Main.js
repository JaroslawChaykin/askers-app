import React, { useState } from 'react';
import { FlatList, StyleSheet, TextInput, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import Typography from '../../UI/Typography';
import themes from '../../../constants/_theme.constants';
import { AntDesign } from '@expo/vector-icons';
import FullSurveyPreview from '../../FullSurveyPreview';


export default function Main() {

    const [ask, setAsk] = useState([
        {
            name: 'Бычин Арсений',
            course: 3,
            program: 'Дизайн',
            title: 'Приложение для проведения опросов',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 1
        },
        {
            name: 'Чайкин Ярослав',
            course: 2,
            program: 'Дизайн и программирование',
            title: 'Приложение для проведения опросов 2',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 2
        },
        {
            name: 'Бенедикт Камбербетч',
            course: 1,
            program: 'Актер потрясающий просто крутой очень сильно',
            title: 'Приложение для проведения опросов 3',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 3
        },
        {
            name: 'Бенедикт Камбербетч',
            course: 1,
            program: 'Актер потрясающий просто крутой очень сильно',
            title: 'Приложение для проведения опросов 3',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 4
        },
        {
            name: 'Бенедикт Камбербетч',
            course: 1,
            program: 'Актер потрясающий просто крутой очень сильно',
            title: 'Приложение для проведения опросов 3',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 5
        },
    ]);

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
            data={ask}
            renderItem={({item}) => (<FullSurveyPreview item={item} />)} />
      </View>
    );
}

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
