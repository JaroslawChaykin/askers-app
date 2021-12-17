import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Profile({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Authorization')}>
        <Text style={styles.buttonText}>Выйти</Text>
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
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    backgroundColor: '#c41919',
    margin: 14,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff'
  }
});
