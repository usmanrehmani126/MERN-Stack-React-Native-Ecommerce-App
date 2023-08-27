import {StyleSheet} from 'react-native';
import {COLORS, SIZES} from '../../assets/constants';
const styles = StyleSheet.create({
    container:{
        marginTop:SIZES.medium,
        marginBottom:SIZES.xSmall,
        marginHorizontal:12
    },
    header:{
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
    }
    ,headerTitle:{
        fontWeight:"900",
        color:"black",
        fontSize:SIZES.xLarge - 6
    }
});
export default styles;
