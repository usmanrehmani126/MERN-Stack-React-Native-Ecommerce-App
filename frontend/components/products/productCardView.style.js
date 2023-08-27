import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/constants';
const styles = StyleSheet.create({
  container: {
    width: 180,
    height: 220,
    backgroundColor: COLORS.secondary,
    borderRadius: SIZES.medium,
  },
  imageContainer: {},
  details: {
    padding: SIZES.small,
  },
  textTitle: {
    color: 'black',
    marginBottom: 2,
    fontWeight: '900',
  },
  supplier: {
    color: 'gray',
    marginBottom: 2,
    fontSize: SIZES.small,
  },
  price: {
    color: 'black',
    marginBottom: 2,
    fontSize: SIZES.medium,
    fontWeight: '900',
  },
  adddBtn: {
    position: 'absolute',
    bottom: 20,
    right: 15,
    backgroundColor: COLORS.primary,
    width: 25,
    height: 25,
    borderRadius: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default styles;
