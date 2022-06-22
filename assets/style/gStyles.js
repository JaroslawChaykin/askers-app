import { StyleSheet } from 'react-native';
import themes from '../../constants/_theme.constants';


export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.palette.background,
    borderTopColor: themes.palette.secondary
  },
  horizontalBorder: {
    marginHorizontal: 20
  },
  verticalIndent: {
    marginVertical: 10
  },
  containerCenter: {
    flex: 1,
    backgroundColor: themes.palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    minWidth: '100%',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 100,
    backgroundColor: themes.palette.gray,
    fontFamily: themes.fontFamily.medium
  },
  title: {
    fontSize: themes.fontSize.header2,
    fontFamily: themes.fontFamily.bold
  },
  question: {
    borderRadius: 5,
    marginVertical: 15
  },
});
