import {StyleSheet} from 'react-native';
import {COLORS, SHADOWS, SIZES} from '../../assets/constants';
const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'space-between',
    alignContent: 'center',
    flexDirection: 'row',
    padding: SIZES.medium,
    borderRadius: SIZES.small,
    backgroundColor: '#FFF',
    ...SHADOWS.medium,
    shadowColor: COLORS.lightWhite,
    marginBottom:SIZES.small,
    alignItems: 'center',
  },
  image: {
    width: 60,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.xSmall,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage:{
    width:"100%",
    height:60,
    borderRadius: SIZES.small,
    resizeMode:"contain"
  },
  textContainer:{
flex:1,
marginBottom:SIZES.medium
  },
  textTitle:{
    fontSize:SIZES.medium,
    fontWeight:"bold",
    color:COLORS.primary,
    marginLeft:20
  },
  textSupplier:{
    fontSize:SIZES.small +2,
    color:COLORS.gray,
    marginTop:3,
    marginLeft:20
  },
  textPrice:{
    fontSize:SIZES.small +2,
    color:"red",
    marginTop:3,
    marginLeft:20
  },
  textProductLocation:{
    fontSize:SIZES.small +1,
    color:"gray",
    marginTop:3,
    marginLeft:20
  }
});
export default styles;
