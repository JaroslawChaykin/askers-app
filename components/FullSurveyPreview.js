import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import TitleOfScreen from './TitleOfScreen';


export default function FullSurveyPreview(props) {
  return (
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
  }
});
