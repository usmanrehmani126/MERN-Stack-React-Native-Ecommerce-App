import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/constants';
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    paddingTop: SIZES.small,
  },
  sep: {
    marginVertical:5,
  },
});
export default styles;
