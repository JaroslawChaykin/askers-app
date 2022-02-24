import React, { useState } from 'react';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import SurveyPreview from '../../SurveyPreview';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';
import Typography from '../../UI/Typography';

export default function Profile() {

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
            title: 'Приложение для проведения опросов',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 2
        },
        {
            name: 'Бенедикт Камбербетч',
            course: 1,
            program: 'Актер потрясающий просто крутой очень сильно',
            title: 'Приложение для проведения опросов',
            description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!',
            key: 3
        },
    ]);

    function ImageOrInitials() {
        return !ask
          ? <Typography style={styles.avatarInitials}>БА</Typography>
          : <Image style={styles.avatarImage} source={require('../../../assets/Cat.jpg')}/>;
    }

    return (
      <View style={gStyles.container}>
          <Typography style={styles.title}>Бычин Арсений</Typography>
          <View style={styles.infoAboutStudent}>
              <View style={styles.avatar}>
                  {ImageOrInitials()}
              </View>
              <View>
                  <Typography style={styles.studentText}>ОП «Дизайн и программирование»</Typography>
                  <Typography style={styles.studentText}>Группа:
                      <Typography style={{...styles.studentText, ...styles.subStudentText}}> Б19ДЗ19</Typography>
                  </Typography>
                  <Typography style={{...styles.studentText, fontFamily: themes.fontFamily.medium}}>3 Курс</Typography>
              </View>
          </View>
          <View style={styles.headerAsk}>
              <Typography style={styles.subTitle}>Мои опросы</Typography>
              <Typography style={styles.headerAskText}>Пройдено опросов: 0</Typography>
          </View>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={ask}
            renderItem={({item}) => (
              <SurveyPreview item={item}/>
            )}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    title: {
        ...gStyles.title,
        marginTop: 22,
        marginHorizontal: 20
    },
    subTitle: {
        fontFamily: themes.fontFamily.bold,
        fontSize: themes.fontSize.header3
    },
    infoAboutStudent: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 36,
        marginHorizontal: 20
    },
    avatar: {
        width: 100,
        height: 100,
        backgroundColor: themes.palette.primaryBlue,
        borderRadius: 10,
        marginRight: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarInitials: {
        fontSize: 36,
        fontWeight: 'bold',
        color: themes.palette.white
    },
    avatarImage: {
        width: '100%',
        height: '100%',
    },
    studentText: {
        fontSize: 14,
        marginBottom: 10,
        maxWidth: 250,
        fontFamily: themes.fontFamily.regular
    },
    subStudentText: {
        fontFamily: themes.fontFamily.bold
    },
    headerAsk: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginHorizontal: 20
    },
    headerAskText: {
        marginBottom: 2
    }
});
