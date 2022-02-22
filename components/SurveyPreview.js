import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TitleOfScreen from './TitleOfScreen';
import themes from '../constants/_theme.constants';


export default function SurveyPreview() {
  return (
    <View>
      <View style={styles.container}>
        <TitleOfScreen text={'Приложение для проведения опросов'} size={17} />
        <View style={styles.previewInfo}>
          <Text>Участников: 13</Text>
          <Text>Создано: 28.09.21</Text>
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.buttonAround}>
          <Text>Редактировать</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFill}>
          <Text style={styles.buttonFillText}>Результаты</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: themes.palette.primaryBlue,
    borderRadius: 10,
    maxHeight: 350,
    marginTop: 20,
    overflow: 'hidden',
    paddingVertical: 10,
    paddingHorizontal: 15
  },
  previewInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 7
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  buttonAround: {
    borderWidth: 1,
    borderColor: themes.palette.primaryBlue,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonFill: {
    backgroundColor: themes.palette.primaryBlue,
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  buttonFillText: {
    color: themes.palette.white
  }
});
