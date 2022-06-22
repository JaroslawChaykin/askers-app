import React, { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Typography from '../UI/Typography';
import { gStyles } from '../../assets/style/gStyles';
import themes from '../../constants/_theme.constants';

const LongAnswer = ({question}) => {
    const [input, setInput] = useState();
    return (
      <View style={gStyles.question}>
          <Typography style={styles.text}>{question.title}</Typography>
          <TextInput style={styles.input}
                     multiline
                     numberOfLines={10}
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
        borderRadius: 5,
        textAlignVertical: 'top'
    },
});
export default LongAnswer;