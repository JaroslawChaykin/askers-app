import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function SignUp({navigation}) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={'Логин'}/>
      <TextInput style={styles.input} placeholder={'Пароль'}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MainNav')}>
        <Text style={styles.buttonText}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    marginTop: 50,
    flexDirection: 'row',
  },
  input: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    width: 270,
    paddingVertical: 12,
    paddingHorizontal: 8,
    margin: 6,
    borderRadius: 5,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    backgroundColor: '#1F69FF',
    margin: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff'
  }
});
