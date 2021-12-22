import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import TitleOfScreen from '../TitleOfScreen';
import SurveyPreview from '../SurveyPreview';

export default function Profile() {

  const [ask, setAsk] = useState([
    {name: 'Бычин Арсений', course: 3, program: 'Дизайн', title: 'Приложение для проведения опросов', description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!', key: 1},
    {name: 'Чайкин Ярослав', course: 2, program: 'Дизайн и программирование', title: 'Приложение для проведения опросов', description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!', key: 2},
    {name: 'Бенедикт Камбербетч', course: 1, program: 'Актер потрясающий просто крутой очень сильно', title: 'Приложение для проведения опросов', description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!', key: 3},
  ])

  function ImageOrInitials() {
    if(true) {
      return <Text style={styles.avatarInitials}>БА</Text>
    } else {
      return <Image style={styles.avatarImage} />
    }
  }

  return (
    <View showsVerticalScrollIndicator={false} style={styles.container}>
      <TitleOfScreen text={'Бычин Арсений'} size={28}/>
      <View style={styles.infoAboutStudent}>
        <View style={styles.avatar}>
          {ImageOrInitials()}
        </View>
        <View>
          <Text style={styles.studentText}>ОП «Дизайн и программирование»</Text>
          <Text style={styles.studentText}>Группа:
            <Text style={{fontWeight: 'bold'}}> Б19ДЗ19</Text>
          </Text>
          <Text style={[styles.studentText, {fontWeight: 'bold'}]}>3 Курс</Text>
        </View>
      </View>
      <View style={styles.headerAsk}>
        <TitleOfScreen text={'Мои опросы'} size={22}/>
        <Text>Пройдено опросов: 0</Text>
      </View>
      <FlatList data={ask} renderItem={({item})=> (
        <SurveyPreview item={item}/>
      )} />
      {/*<TouchableOpacity style={styles.button} onPress={  () => navigation.navigate('Authorization')}>*/}
      {/*  <Text style={styles.buttonText}>Выйти</Text>*/}
      {/*</TouchableOpacity>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25
  },
  infoAboutStudent: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 36
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#1F69FF',
    borderRadius: 10,
    marginRight: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center'

  },
  avatarInitials: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff'
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  studentText: {
    fontSize: 14,
    marginBottom: 10,
    maxWidth: 250
  },
  headerAsk: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});
