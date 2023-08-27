import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../assets/constants';
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
    height: 60,
    paddingLeft: 6,
    paddingRight: 6,
  },

  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small,
  },
  searchInput: {
    fontFamily: "regular",
    height: "100%",
    width: "100%",
    paddingHorizontal: SIZES.small,
  },
  filterIconContainer: {
    width: 50,
    height: 40,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.primary
  },
  searchImage:{
    width:SIZES.width - 100,
    height:SIZES.height-300,
    resizeMode:"contain",
    opacity:0.9
  }
});
export default styles;
