import {StyleSheet} from 'react-native'
import { COLORS, SIZES } from '../assets/constants'
const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:COLORS.lightWhite,
    },
    upperRow:{
        width:SIZES.width - 50,
        marginHorizontal:SIZES.large,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:COLORS.primary,
        borderRadius:SIZES.large,
        top:SIZES.large,
        zIndex:999,
        marginBottom:40,
        
    },
    heading:{
        color:"white",
        fontWeight:"600",
       marginLeft:110,
       fontSize:17
    }
})
export default styles