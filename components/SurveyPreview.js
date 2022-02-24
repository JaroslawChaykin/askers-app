import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import themes from '../constants/_theme.constants';
import Typography from './UI/Typography';
import { gStyles } from '../assets/style/gStyles';
import AskButton from './UI/AskButton';


export default function SurveyPreview({navigation, item}) {
  return (
    <View>
      <View style={styles.container}>
        <Typography style={styles.title}>{item.title}</Typography>
        <View style={styles.previewInfo}>
          <Typography style={styles.text}>Время создания: 28.09.21</Typography>
          <Typography style={styles.text}>Участников: 10</Typography>
        </View>
      </View>
      <View style={styles.buttons}>
        <AskButton
          cb={() => navigation.navigate('Results', item)}
          style={styles.button}
          text={'Результаты'}
        />
        <AskButton
          cb={() => navigation.navigate('Опрос', item)}
          style={{...styles.button, ...styles.buttonUnFill}}
          text={'Редактировать'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: themes.fontSize.mainText
  },
  title: {
    ...gStyles.title,
    fontSize: 17
  },
  container: {
    backgroundColor: themes.palette.white,
    borderRadius: 25,
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: themes.palette.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 20,
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
    marginTop: 10,
    marginHorizontal: 20
  },
  button: {
    ...gStyles.button,
    paddingVertical: 14,
  },
  buttonUnFill: {
    backgroundColor: 'transparent',
    color: themes.palette.primaryBlue
  },
  buttonFillText: {
    color: themes.palette.white
  }
});
