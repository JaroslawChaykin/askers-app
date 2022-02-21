import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';

export  default function Authorization({navigation}) {
  return (
    <View style={gStyles.containerCenter}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.buttonText}>Зарегестрироваться</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.button2]} onPress={() => navigation.navigate('SignIn')}>
        <Text style={[styles.buttonText, styles.buttonText2]}>Войти</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    backgroundColor: '#1F69FF',
    margin: 14,
    borderRadius: 10,
  },
  button2: {
    backgroundColor: null,
    borderWidth: 1,
    borderColor: '#1F69FF'
  },
  buttonText: {
    color: '#fff',
    fontSize: 17
  },
  buttonText2: {
    color: '#000',
    fontSize: 17
  }
});