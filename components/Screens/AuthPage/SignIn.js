import React, { useState } from 'react';
import { StyleSheet, TextInput, View,Text } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import AskButton from '../../UI/AskButton';
import themes from '../../../constants/_theme.constants';
import { useAuth } from '../../../contexts/UserContext';

export default function SignIn() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const {signIn, isLoading} = useAuth()

    const logInUser = () => {
        if(login && password) {
            signIn()
        }
    }

    return (
      <View style={gStyles.containerCenter}>
          <View>
              <TextInput style={styles.input}
                         value={login}
                         onChangeText={text => setLogin(text)}
                         editable={!isLoading}
                         placeholder={'Логин'}/>
              <TextInput style={styles.input}
                         value={password}
                         editable={!isLoading}
                         onChangeText={text => setPassword(text)}
                         secureTextEntry
                         placeholder={'Пароль'}/>
              <AskButton
                style={styles.subButton}
                text={'Забыл пароль'}
              />
              <View style={{alignItems: 'center'}}>
                  <AskButton
                    style={styles.button}
                    cb={logInUser}
                    text={isLoading ? 'Загрузка' : 'Войти'}
                  />
              </View>
          </View>
      </View>
    );
};

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
        color: themes.palette.primary,
        marginTop: 6,
        marginLeft: 18
    }
});
