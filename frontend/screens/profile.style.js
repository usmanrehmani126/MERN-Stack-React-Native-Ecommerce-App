import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../assets/constants';
const styles = StyleSheet.create({
  name: {
    fontWeight: 'bold',
    color: COLORS.primary,
    marginVertical: 5,
    alignSelf: 'center',
  },
  menuWrapper: {
    marginTop: SIZES.xLarge,
    width: SIZES.width - SIZES.large,
    backgroundColor: COLORS.lightWhite,
    borderRadius: 12,
  },
  menuItem: borderBottomWidth => ({
    borderBottomWidth: borderBottomWidth,
    paddingVertical: 20,
    paddingHorizontal: 30,
    flexDirection: 'row',
    borderColor: COLORS.gray,
  }),
  menuText:{
   fontFamily:"regular",
   color: COLORS.gray,
   marginLeft:20,
   fontWeight:"600",
   fontSize:14,
   lineHeight:26
  },
  errorMessage:{
    color: COLORS.red,
    fontFamily:"regular",
    marginTop:5,
    marginLeft:5,
    fontSize:SIZES.xSmall
  }
});
export default styles;
