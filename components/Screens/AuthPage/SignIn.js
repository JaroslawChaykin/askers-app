import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import AskButton from '../../UI/AskButton';
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
          <View style={gStyles.horizontalBorder}>
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
                variant={'secondary'}
                text={'Забыл пароль'}
              />
              <View style={styles.button}>
                  <View>
                      <AskButton
                        cb={logInUser}
                        text={isLoading ? 'Загрузка' : 'Войти'}
                      />
                  </View>
              </View>
          </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
      width: 270
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        ...gStyles.input,
        marginTop: 5,
        marginBottom: 5,
    },
    buttonGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
