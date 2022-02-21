import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';

export default function SignUp({navigation}) {
  return (
    <View style={gStyles.containerCenter}>
      <TextInput style={gStyles.inputAuth} placeholder={'Логин'}/>
      <TextInput style={gStyles.inputAuth} placeholder={'Пароль'}/>
      <TouchableOpacity style={gStyles.buttonAuth} onPress={() => navigation.navigate('MainNav')}>
        <Text style={gStyles.textColorWhite}>Войти</Text>
      </TouchableOpacity>
    </View>
  );
}
