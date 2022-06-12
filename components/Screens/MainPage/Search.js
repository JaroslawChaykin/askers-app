import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import TitleOfScreen from '../../TitleOfScreen';
import { AntDesign } from '@expo/vector-icons';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';
import Typography from '../../UI/Typography';
import { Picker } from '@react-native-picker/picker';

export default function Search() {

    const [selected, setSelected] = useState('1')

    return (
      <View style={gStyles.container}>
          <View style={gStyles.horizontalBorder}>
              <Typography style={styles.title}>Поиск</Typography>
              <View style={styles.inputContainer}>
                  <TextInput style={styles.input} placeholder={'ФИО, ОП или название опроса'}/>
                  <AntDesign style={styles.icon} name="search1" size={19} color="#1F69FF"/>
              </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 20,
    },
    title: {
        ...gStyles.title,
        marginTop: 22,
    },
    input: {
        ...gStyles.input,
        paddingLeft: 47,
        width: '100%',
    },
    icon: {
        position: 'absolute',
        top: 15,
        left: 18
    },
});
