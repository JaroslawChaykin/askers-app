import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import TitleOfScreen from './TitleOfScreen';
import { AntDesign } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function AskBox(props, deleteAsk) {

  const [selectedValue, setSelectedValue] = useState("1");

  return (
    <View style={styles.askContainer}>
      <View style={styles.askHeader}>
        <TitleOfScreen text={`${props.item.askCount} вопрос`} size={22} />
        <View>
          <TouchableOpacity style={styles.deleteBtn} onPress={() => props.deleteAsk(props.item.key)}>
            <AntDesign name="minus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={'Название опроса'} />
        </View>
        <View style={styles.selectAsk}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label={'Один вариант ответа'} value={'1'}/>
            <Picker.Item label={'Два варианта ответа'} value={'2'}/>
            <Picker.Item label={'Три варианта ответа'} value={'3'}/>
          </Picker>
        </View>
      </View>
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
  askContainer: {
    marginTop: 35
  },
  askHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteBtnBox: {
    flexDirection: 'row',
  },
  deleteBtn: {
    paddingHorizontal: 10,
    lineHeight: 2,
    backgroundColor: '#FC5555',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  selectAsk: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    marginTop: 10
  },
  input: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    marginTop: 20
  },
});
