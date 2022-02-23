import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';
import AskButton from '../../UI/AskButton';

export default function SignUp({navigation}) {
    return (
      <View style={gStyles.containerCenter}>
          <TextInput style={styles.input} placeholder={'Email'}/>
          <TextInput style={styles.input} placeholder={'Логин'}/>
          <TextInput style={styles.input} placeholder={'Пароль'}/>
          <AskButton
            style={styles.button}
            cb={() => navigation.navigate('MainNav')}
            text={'Зарегистрироваться'}
          />
      </View>
    );
}

const styles = StyleSheet.create({
    input: {
        ...gStyles.input,
        marginTop: 5,
        marginBottom: 5,
    },
    button: {
        ...gStyles.button,
        marginTop: 30,
    },
    subButton: {
        fontFamily: themes.fontFamily.bold,
        fontSize: 12,
        color: themes.palette.primaryBlue,
        marginTop: 6,
        marginLeft: 18
    }
});
