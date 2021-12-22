import React, { useState } from 'react';
import { StyleSheet, View, TextInput, ScrollView, TouchableOpacity, Text } from 'react-native';
import TitleOfScreen from '../TitleOfScreen';
import AskBox from '../AskBox';

export default function CreateAsk() {

  const [countAsk, setCountAsk] = useState([])
  let [count, setCount] = useState(1)

  const addAsk = () => {
    setCount(count + 1)

    setCountAsk((list) => {
      return [
        ...list,
        {askCount: count, key: count},
      ]
    })
  }

  const deleteAsk = (key) => {
    setCountAsk((list) => {
      return list.filter(countAsk => countAsk.key !== key)
    })
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.pb40}>
        <TitleOfScreen text={'Название опроса'} size={28} />
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder={'Название опроса'} />
        </View>
        {/*<FlatList data={countAsk} renderItem={({item}) => (*/}
        {/*  <AskBox item={item} deleteAsk={deleteAsk}/>*/}
        {/*)} />*/}
        <View >
          {
            countAsk.map(item => {
              return (
                <AskBox item={item} key={item.key} deleteAsk={deleteAsk}/>
              )
            })
          }
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity style={styles.button} onPress={addAsk}>
            <Text style={styles.buttonText}>Добавить вопрос</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  pb40: {
    paddingBottom: 150
  },
  input: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  inputContainer: {
    marginTop: 20
  },
  buttonBox: {
    flexDirection: 'row'
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1F69FF',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 17,
    color: '#000'
  }
});
