import {StyleSheet} from 'react-native';
import {SIZES, COLORS} from '../../assets/constants';
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  welcomeText: {
    fontWeight: '600',
    fontSize: SIZES.xxLarge - 4,
    color: 'black',
    marginTop: SIZES.xSmall,
  },  
  welcomeNightText: {
    fontWeight: '600',
    fontSize: SIZES.xxLarge - 4,
    color: 'white',
    marginTop: SIZES.xSmall,
  },
  welcomeText1: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: SIZES.xxLarge - 6,
  }, welcomeNightText1: {
    color: "white",
    fontWeight: '700',
    fontSize: SIZES.xxLarge - 6,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor:COLORS.secondary,
    borderRadius:SIZES.medium,
    height:60,
    paddingLeft:6,
    paddingRight:6,
    marginTop:12,
    flex:1,
  },
  
  searchWrapper:{
    flex:1,
    backgroundColor:COLORS.secondary,
    marginRight:SIZES.small,
    borderRadius:SIZES.small,
  },
  searchInput:{
    fontFamily:"regular",
    height:"100%",
    width:"100%",
    paddingHorizontal:SIZES.small,
  },
  filterIconContainer:{
    width:50,
    height:40,
    borderRadius:12,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:"white"
  }
});
export default styles;
