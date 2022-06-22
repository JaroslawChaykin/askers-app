import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from '../UI/Typography';
import themes from '../../constants/_theme.constants';

const ShortQuestion = () => {
    return (
      <View style={styles.short}>
          <Typography style={styles.text}>Здесь будет короткий ответ</Typography>
      </View>
    );
};
const styles = StyleSheet.create({
    short: {
        backgroundColor: themes.palette.gray,
        padding: 15,
        borderRadius: 5,
    },
    text: {
        color: themes.palette.darkGray
    }
})
export default ShortQuestion;