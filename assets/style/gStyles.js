import { StyleSheet } from 'react-native';
import themes from '../../constants/_theme.constants';


export const gStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themes.palette.background,
    borderTopColor: themes.palette.secondaryBlue
  },
  horizontalBorder: {
    marginHorizontal: 20
  },
  containerCenter: {
    flex: 1,
    backgroundColor: themes.palette.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 270,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 100,
    backgroundColor: themes.palette.gray,
    fontFamily: themes.fontFamily.medium
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 28,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: themes.palette.primaryBlue,
    fontFamily: themes.fontFamily.medium,
    color: themes.palette.white
  },
  title: {
    fontSize: themes.fontSize.header2,
    fontFamily: themes.fontFamily.bold
  }
});
