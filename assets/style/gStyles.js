import { StyleSheet } from 'react-native';
import themes from '../../constants/_theme.constants';

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.palette.white,
    paddingHorizontal: 25
  },
  containerCenter: {
    flex: 1,
    backgroundColor: themes.palette.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputAuth: {
    borderWidth: 2,
    borderColor: themes.palette.primaryBlue,
    width: 270,
    paddingVertical: 12,
    paddingHorizontal: 8,
    margin: 6,
    borderRadius: 5,
  },
  buttonAuth: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    backgroundColor: themes.palette.primaryBlue,
    margin: 14,
    borderRadius: 10,
  },
  textColorWhite: {
    color: 'white',
  }
});
