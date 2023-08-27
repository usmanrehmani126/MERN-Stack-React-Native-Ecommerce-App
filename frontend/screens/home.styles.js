import { StyleSheet } from "react-native";
import React from "react";
import { COLORS,SIZES } from "../assets/constants";

const styles= StyleSheet.create({
    appTopBarWrapper:{
        paddingTop:SIZES.small,
        flex:1,
        paddingLeft:12,
        paddingRight:12
    },
    appBar:{
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between",
        
    },
    locationText:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray,
    },
    cartCount:{
        position: "absolute",
        bottom:14,
        width:16,
        height:16,
        borderRadius:8,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"green",
        zIndex:9999
    },
    cartNo:{
        fontFamily:" monospace",
        fontSize:10,
        color:COLORS.lightWhite
    },
    
})
export default styles