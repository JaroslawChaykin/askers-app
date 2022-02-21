import { StyleSheet } from 'react-native';

export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25
  },
  containerCenter: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputAuth: {
    borderWidth: 2,
    borderColor: '#1F69FF',
    width: 270,
    paddingVertical: 12,
    paddingHorizontal: 8,
    margin: 6,
    borderRadius: 5,
  },
  buttonAuth: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    backgroundColor: '#1F69FF',
    margin: 14,
    borderRadius: 10,
  },
  textColorWhite: {
    color: 'white',
  }
});
