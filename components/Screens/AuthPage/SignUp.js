import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import AskButton from '../../UI/AskButton';

export default function SignUp({navigation}) {
    return (
      <View style={gStyles.containerCenter}>
          <View style={gStyles.horizontalBorder}>
              <TextInput style={styles.input} placeholder={'Email'}/>
              <TextInput style={styles.input} placeholder={'Логин'}/>
              <TextInput style={styles.input} placeholder={'Пароль'}/>
              <View style={styles.button}>
                  <View>
                      <AskButton
                        cb={() => navigation.navigate('MainNav')}
                        text={'Зарегистрироваться'}
                      />
                  </View>
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
});
