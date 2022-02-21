import React from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import TitleOfScreen from '../../TitleOfScreen';
import { AntDesign } from '@expo/vector-icons';
import { gStyles } from '../../../assets/style/gStyles';

export default function Search() {

  let nameOfProfile = [
    {name: 'Архитектура', key: 1},
    {name: 'Биологические науки', key: 2},
    {name: 'Востоковедение', key: 3},
    {name: 'Изобразительное искусство', key: 4},
    {name: 'Информатика', key: 5},
    {name: 'Информационная безопастность', key: 6},
    {name: 'Искусствознание', key: 7},
    {name: 'История и археология', key: 8},
    {name: 'Культуроведение', key: 9},
    {name: 'Математика', key: 10},
    {name: 'Политические науки', key: 11},
    {name: 'Психологические науки', key: 12},
    {name: 'Социология', key: 13},
    {name: 'СМИ', key: 14},
    {name: 'Сценические искусства', key: 15},
    {name: 'Физика', key: 16},
  ]

  return (
    <ScrollView style={gStyles.container}>
      <TitleOfScreen text={'Поиск по ФИО или ОП'} size={28}/>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder={'ФИО, образовательная программа'} />
        <AntDesign style={styles.icon} name="search1" size={19} color="#1F69FF" />
      </View>
      <View style={styles.profileBox}>
        {
          nameOfProfile.map(item => {
            return (
              <TouchableOpacity style={styles.profileButton} key={item.key}>
                <Text style={styles.profileButtonText}>{item.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    paddingHorizontal: 10
  },
  profileButtonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
