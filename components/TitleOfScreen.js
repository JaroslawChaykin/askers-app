import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import themes from '../constants/_theme.constants';

export default function TitleOfScreen(props) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 10
    },
    text: {
      fontSize: props.size,
      fontWeight: 'bold',
      color: themes.palette.black
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
}
