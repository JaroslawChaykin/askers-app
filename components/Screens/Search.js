import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import TitleOfScreen from '../TitleOfScreen';
import { AntDesign } from '@expo/vector-icons';

export default function Search() {

  const nameOfProfile= [
    'Архитектура',
    'Биологические науки',
    'Востоковедение',
    'Изобразительное искусство',
    'Информатика',
    'Информационная безопастность',
    'Искусствознание',
    'История и археология',
    'Культуроведение',
    'Математика',
    'Политические науки',
    'Психологические науки',
    'Социология',
    'СМИ',
    'Сценические искусства',
    'Физика',
  ]

  return (
    <ScrollView style={styles.container}>
      <TitleOfScreen text={'Поиск по ФИО или ОП'} size={28}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={'ФИО, образовательная программа'} />
        <AntDesign style={styles.icon} name="search1" size={19} color="#1F69FF" />
      </View>
      <View style={styles.profileBox}>
        {
          nameOfProfile.map(item => {
            return (
              <TouchableOpacity style={styles.profileButton}>
                <Text style={styles.profileButtonText}>{item}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    paddingVertical: 8,
    paddingLeft: 38,
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    top: 14,
    left: 8
  },
  profileBox: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  profileButton: {
    backgroundColor: '#1F69FF',
    paddingVertical: 15,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    height: 76,
    paddingHorizontal: 20
  },
  profileButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
