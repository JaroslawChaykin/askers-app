import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { gStyles } from '../../assets/style/gStyles';
import Typography from '../UI/Typography';
import themes from '../../constants/_theme.constants';

const ShortAnswer = ({question}) => {
    const [input, setInput] = useState();
    return (
      <View style={gStyles.question}>
          <Typography style={styles.text}>{question.title}</Typography>
          <TextInput style={styles.input}
                     value={input}
                     onChangeText={text => setInput(text)}
                     editable={true}
                     placeholder={'Ваш ответ'}/>
      </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: themes.fontSize.sebHeader,
        fontFamily: themes.fontFamily.medium
    },
    input: {
        ...gStyles.input,
        marginTop: 5,
        marginBottom: 5,
    },
});
export default ShortAnswer;