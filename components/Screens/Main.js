import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';
import TitleOfScreen from '../TitleOfScreen';
import FullSurveyPreview from '../FullSurveyPreview';


export default function Main() {

  const [ask, setAsk] = useState([
    {name: 'Бычин Арсений', course: 3, program: 'Дизайн', title: 'Приложение для проведения опросов', description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!', key: 1},
    {name: 'Чайкин Ярослав', course: 2, program: 'Дизайн и программирование', title: 'Приложение для проведения опросов', description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!', key: 2},
    {name: 'Бенедикт Камбербетч', course: 1, program: 'Актер потрясающий просто крутой очень сильно', title: 'Приложение для проведения опросов', description: 'Мы делаем приложение для проведения опросов. Помоги нам, уделив всего 5 минут своего времени!', key: 3},
  ])

  return (
    <View style={styles.container}>
      <TitleOfScreen text={'Опросы вашей образовательной программы'} size={28}/>
      <FlatList data={ask} renderItem={({item})=> (
        <FullSurveyPreview item={item}/>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25
  }
});
