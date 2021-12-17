import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';


export default function TitleOfScreen(props) {
  const styles = StyleSheet.create({
    text: {
      fontSize: props.size,
      fontWeight: 'bold'
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
