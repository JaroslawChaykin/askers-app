import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import AskButton from '../../UI/AskButton';
import { useAuth } from '../../../contexts/UserContext';

export default function SignUp() {

    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {signUp, isLoading} = useAuth()

    const signUpUser = () => {
        signUp()
    }

    return (
      <View style={gStyles.containerCenter}>
          <View style={gStyles.horizontalBorder}>
              <TextInput style={styles.input}
                         value={email}
                         editable={!isLoading}
                         onChangeText={text => setEmail(text)}
                         placeholder={'Email'}/>
              <TextInput style={styles.input}
                         value={login}
                         editable={!isLoading}
                         onChangeText={text => setLogin(text)}
                         placeholder={'Логин'}/>
              <TextInput style={styles.input}
                         value={password}
                         onChangeText={text => setPassword(text)}
                         secureTextEntry
                         placeholder={'Пароль'}/>
              <View style={styles.button}>
                  <View>
                      <AskButton
                        cb={signUpUser}
                        text={isLoading ? 'Загрузка' : 'Зарегистрироваться' }
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
