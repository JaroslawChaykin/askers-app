import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import AskButton from '../../UI/AskButton';
import themes from '../../../constants/_theme.constants';

export default function SignUp({navigation}) {
    return (
      <View style={gStyles.containerCenter}>
          <View>
              <TextInput style={styles.input} placeholder={'Логин'}/>
              <TextInput style={styles.input} placeholder={'Пароль'}/>
              <AskButton
                style={styles.subButton}
                cb={() => navigation.navigate('MainNav')}
                text={'Забыл пароль'}
              />
              <View style={{alignItems: 'center'}}>
                  <AskButton
                    style={styles.button}
                    cb={() => navigation.navigate('MainNav')}
                    text={'Войти'}
                  />
              </View>
          </View>
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
