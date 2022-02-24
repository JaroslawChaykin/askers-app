import React from 'react';
import { StyleSheet, View } from 'react-native';
import Typography from './UI/Typography';
import themes from '../constants/_theme.constants';
import { gStyles } from '../assets/style/gStyles';


export default function FullSurveyPreview({item}) {
    return (
      <View style={styles.previewContainer}>
          <View style={styles.previewHeader}>
              <Typography style={styles.title}>{item.title}</Typography>
              <View style={styles.previewInfo}>
                  <Typography style={{...styles.text, ...styles.gap}}>Время опроса: 15 минут</Typography>
                  <Typography style={styles.text}>Участников: 10</Typography>
              </View>
          </View>
          <View style={styles.previewBody}>
              <Typography style={styles.previewBodyText}>{item.description}</Typography>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    title: {
        ...gStyles.title,
        fontSize: themes.fontSize.sebHeader
    },
    gap: {
      paddingRight: 15
    },
    previewContainer: {
        backgroundColor: themes.palette.white,
        marginTop: 20,
        borderRadius: 25,
        overflow: 'hidden',
        shadowColor: themes.palette.black,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 3,
        marginHorizontal: 20
    },
    previewHeader: {
        padding: 20,

    },
    previewInfo: {
        flexDirection: 'row',
        marginTop: 5
    },
    previewBody: {
        paddingVertical: 15,
        paddingHorizontal: 11,
        backgroundColor: themes.palette.primaryBlue,
    },
    previewBodyText: {
        color: themes.palette.white
    },
    text: {
        fontSize: 11,
    }
});
