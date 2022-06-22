import React, { useState } from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import Typography from '../UI/Typography';
import themes from '../../constants/_theme.constants';
import { gStyles } from '../../assets/style/gStyles';

const SingleAnswer = ({question}) => {

    const [checked, setChecked] = useState('');

    const handleCheck = (option) => {
        setChecked(option);
    };

    return (
      <View style={gStyles.question}>
          <Typography style={styles.text}>{question.title}</Typography>
          {
              question.options.map((item) => (
                <TouchableHighlight key={item}
                                    underlayColor={themes.palette.gray}
                                    style={styles.container}
                                    onPress={() => handleCheck(item)}>
                    <>
                        <View style={styles.checkbox}>
                            <View style={checked === item ? styles.active : ''}></View>
                        </View>
                        <Typography>{item}</Typography>
                    </>
                </TouchableHighlight>
              ))
          }
      </View>
    );
};
const styles = StyleSheet.create({
    text: {
        fontSize: themes.fontSize.sebHeader,
        fontFamily: themes.fontFamily.medium
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: themes.palette.primary,
        marginRight: 11,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    active: {
        width: 25,
        height: 25,
        backgroundColor: themes.palette.primary,
        padding: 5,
        borderRadius: 100,
    }
});
export default SingleAnswer;