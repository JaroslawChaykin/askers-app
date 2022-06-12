import React from 'react';
import { StyleSheet, View } from 'react-native';
import themes from '../constants/_theme.constants';
import Typography from './UI/Typography';
import { gStyles } from '../assets/style/gStyles';
import AskButton from './UI/AskButton';


export default function SurveyPreview({navigation, item}) {
  return (
    <View style={gStyles.horizontalBorder}>
      <View style={styles.container}>
        <Typography style={styles.title}>{item.title}</Typography>
        <View style={styles.previewInfo}>
          <Typography style={styles.text}>Время создания: 28.09.21</Typography>
          <Typography style={styles.text}>Участников: 10</Typography>
        </View>
      </View>
      <View style={styles.buttonGroup}>
        <View>
          <AskButton
            cb={() => navigation.navigate('Результат', item)}
            text={'Результаты'}
          />
        </View>
        <View>
          <AskButton
            variant={'simple-primary'}
            cb={() => navigation.navigate('Опрос', item)}
            text={'Редактировать'}
          />
        </View>
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
  },
  previewInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 7
  },
  buttonGroup: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});
