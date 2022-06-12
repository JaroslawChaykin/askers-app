import React from 'react';
import { StyleSheet, View} from 'react-native';
import { gStyles } from '../../../assets/style/gStyles';
import AskButton from '../../UI/AskButton';

export default function Authorization({navigation}) {
    return (
      <View style={gStyles.containerCenter}>
          <View style={styles.buttonsGroup}>
              <View style={styles.button}>
                  <AskButton
                    cb={() => navigation.navigate('SignUp')}
                    text={'Зарегестрироваться'}
                  />
              </View>
              <View style={styles.button}>
                  <AskButton
                    cb={() => navigation.navigate('SignIn')}
                    text={'Войти'}
                  />
              </View>
          </View>
      </View>
    );
}

const styles = StyleSheet.create({
    buttonsGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        marginVertical: 10
    }
});