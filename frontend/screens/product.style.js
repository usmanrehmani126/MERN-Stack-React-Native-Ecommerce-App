import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../assets/constants';
const styles = StyleSheet.create({
  upperRow: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 12,
    width: SIZES.width - 44,
    zIndex: 999,
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopLeftRadius: SIZES.medium,
    borderTopRightRadius: SIZES.medium,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
  },
  titleRow: {
    marginHorizontal: 12,
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: SIZES.width - 40,
    top: 16,
  },
  title: {
    color: 'black',
    fontWeight: '900',
    fontSize: SIZES.large,
  },
  priceWrapper: {
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.large,
  },
  price: {
    padding: 10,
    fontSize: SIZES.small,
    color: 'black',
    fontWeight: '700',
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: SIZES.width - 8,
    top: 4,
  },
  rating: {
    top: SIZES.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: SIZES.large,
  },
  textRating: {
    color: 'gray',
  },
  decWrapper: {
    marginTop: SIZES.large * 2,
    marginHorizontal: SIZES.large,
  },
  dec: {
    fontWeight: '700',
    color: 'black',
    fontSize:16
  },
  descText: {
    color: 'black',
    fontSize:14
  },
  location: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    padding: 5,
    borderRadius: SIZES.small,
    margin: 8,
  },
  cartRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: SIZES.small,
    width: SIZES.width,
  },
  cartBtn: {
     width: SIZES.width  * 0.7,
     backgroundColor:COLORS.black,
     borderRadius:SIZES.large,
     padding:8,
     marginLeft:4 ,
     alignItems:"center",
     justifyContent:"center", 
  },
  cartTitle: {
    color: 'white', 
    fontWeight: '700',
    fontSize: SIZES.medium,
  },
  addCart:{
    width:95,
    height:40,
    borderRadius: 20,
    margin:SIZES.small,
    backgroundColor:"black",
    alignItems:"center",
     justifyContent:"center", 
     flexDirection:"row",
     gap:5
  }
});
export default styles;
