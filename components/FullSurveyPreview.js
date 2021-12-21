import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import TitleOfScreen from './TitleOfScreen';
import { AntDesign } from '@expo/vector-icons';


export default function FullSurveyPreview(props) {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.left}>
          <View style={styles.imageBox}>
            <Image style={styles.image} source={require('../assets/palm.jpg')} />
          </View>
          <View style={styles.studentInfo}>
            <Text style={styles.studentName}>{props.item.name}</Text>
            <Text>{props.item.course} курс</Text>
            <Text>ОП «{props.item.program}»</Text>
          </View>
        </View>
        <View style={styles.right}>
          <TitleOfScreen text={props.item.title} size={17}/>
          <Text style={styles.text}>{props.item.description}</Text>
        </View>
      </View>
      <View>
        <View style={styles.button}>
          <TouchableOpacity style={styles.buttonAround}>
            <Text style={styles.buttonText}>Пройти опрос</Text>
          </TouchableOpacity>
          <View style={styles.timeInfo}>
            <View style={styles.iconAround}>
              <AntDesign style={styles.icon} name="clockcircleo" size={24} color="white" />
            </View>
            <Text>5 минут</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    borderRadius: 10,
    flexDirection: 'row',
    maxHeight: 350,
    marginTop: 20,
    overflow: 'hidden'
  },
  left: {
    width: '39%',
  },
  right: {
    width: '61%',
    padding: 10,
    borderLeftWidth: 2,
    borderLeftColor: '#1F69FF',
  },
  text: {
    fontSize: 13,
    paddingTop: 5
  },
  imageBox: {
    width: '100%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#1F69FF',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  studentInfo: {
    padding: 10
  },
  studentName: {
    fontWeight: '700'
  },
  button: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 15,
  },
  buttonAround: {
    borderWidth: 1,
    borderColor: '#1F69FF',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
  },
  iconAround: {
    backgroundColor: '#1F69FF',
    padding: 3,
    borderRadius: 120,
    marginRight: 5
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 20
  }
});
