import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import Typography from '../UI/Typography';
import themes from '../../constants/_theme.constants';
import { gStyles } from '../../assets/style/gStyles';
const MultiQuestion = () => {

    const [options, setOptions] = useState([]);

    const newOption = () => {
        setOptions([...options, {id: Date.now(), value: ''}])
    }
    return (
      <View style={styles.short}>
          {
              options.map((item) => (
                <TextInput placeholder={'Новая опция'}
                           key={item.id}
                           style={styles.input}
                           value={item.value}
                           onChangeText={text => setOptions((items) => {
                               return items.filter(op => {
                                   op.id === item.id ? op.value = text : ''
                                   return op
                               })
                           })}
                />
              ))
          }
          <Pressable onPress={() => newOption()}>
              <Typography style={styles.newOption}>Новая опция +</Typography>
          </Pressable>
      </View>
    );
};
const styles = StyleSheet.create({
    input: {
        ...gStyles.input,
        backgroundColor: themes.palette.white,
        marginVertical: 10
    },
    newOption: {
        marginVertical: 10,
        textAlign: 'center'
    },
    short: {
        backgroundColor: themes.palette.gray,
        padding: 15,
        borderRadius: 5,
    },
    text: {
        color: themes.palette.darkGray
    }
});
export default MultiQuestion;