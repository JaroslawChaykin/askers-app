import React from 'react';
import Typography from '../../UI/Typography';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import themes from '../../../constants/_theme.constants';

const Results = ({route}) => {

    const {title} = route.params;

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <Typography style={styles.title}>{title}</Typography>
          <Typography style={styles.text}>13 участников</Typography>
          <View style={styles.results}>
              <View style={styles.resultContainer}>
                  <Typography style={styles.subTitle}>1 Вопрос</Typography>
                  <View style={styles.graph}>
                      <View style={styles.graphBox}>
                          <Image style={styles.image} source={require('../../../assets/circle.png')}/>
                      </View>
                      <View style={styles.graphInfo}>
                          <View style={styles.graphPosition}>
                              <View style={styles.graphPositionTop}>
                                  <View style={styles.circle}/>
                                  <Typography style={styles.circleText}>50%</Typography>
                              </View>
                              <Typography style={styles.positionText}>1 вариант ответа</Typography>
                          </View>
                          <View style={styles.graphPosition}>
                              <View style={styles.graphPositionTop}>
                                  <View style={styles.circle2}/>
                                  <Typography style={styles.circleText}>30%</Typography>
                              </View>
                              <Typography style={styles.positionText}>2 вариант ответа</Typography>
                          </View>
                          <View style={styles.graphPosition}>
                              <View style={styles.graphPositionTop}>
                                  <View style={styles.circle3}/>
                                  <Typography style={styles.circleText}>20%</Typography>
                              </View>
                              <Typography style={styles.positionText}>3 вариант ответа</Typography>
                          </View>
                      </View>
                  </View>
              </View>
              <View style={styles.resultContainer}>
                  <Typography style={styles.subTitle}>1 Вопрос</Typography>
                  <View style={styles.graph}>
                      <View style={styles.graphBox}>
                          <Image style={styles.image} source={require('../../../assets/sqrt.png')}/>
                      </View>
                      <View style={styles.graphInfo}>
                          <View style={styles.graphPosition}>
                              <View style={styles.graphPositionTop}>
                                  <View style={styles.circle}/>
                                  <Typography style={styles.circleText}>50%</Typography>
                              </View>
                              <Typography style={styles.positionText}>1 вариант ответа</Typography>
                          </View>
                          <View style={styles.graphPosition}>
                              <View style={styles.graphPositionTop}>
                                  <View style={styles.circle2}/>
                                  <Typography style={styles.circleText}>30%</Typography>
                              </View>
                              <Typography style={styles.positionText}>2 вариант ответа</Typography>
                          </View>
                          <View style={styles.graphPosition}>
                              <View style={styles.graphPositionTop}>
                                  <View style={styles.circle3}/>
                                  <Typography style={styles.circleText}>20%</Typography>
                              </View>
                              <Typography style={styles.positionText}>3 вариант ответа</Typography>
                          </View>
                      </View>
                  </View>
              </View>
          </View>
      </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        ...gStyles.title,
        marginTop: 22,
        marginHorizontal: 20
    },
    subTitle: {
        fontSize: themes.fontSize.sebHeader,
        fontFamily: themes.fontFamily.bold
    },
    text: {
        marginHorizontal: 20,
        marginTop: 12
    },
    results: {
        marginBottom: 50
    },
    resultContainer: {
        marginHorizontal: 20,
        backgroundColor: themes.palette.white,
        padding: 20,
        borderRadius: 25,
        marginTop: 36,
        shadowColor: themes.palette.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
    },
    graph: {
        flexDirection: 'row',
        marginTop: 10
    },
    graphBox: {
        width: '50%',
        height: 150
    },
    graphPosition: {
        marginBottom: 15
    },
    graphPositionTop: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    circleText: {
        color: themes.palette.gray,
        fontSize: themes.fontSize.mainText,
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: '#FF5454',
        marginRight: 10
    },
    circle2: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: '#74B4FF',
        marginRight: 10
    },
    circle3: {
        width: 10,
        height: 10,
        borderRadius: 100,
        backgroundColor: '#88FF74',
        marginRight: 10
    }
});

export default Results;