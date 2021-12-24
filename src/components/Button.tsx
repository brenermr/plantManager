import React from "react";
import {TouchableOpacity,TouchableOpacityProps, Text, StyleSheet} from 'react-native'
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

interface ButtonProps extends TouchableOpacityProps{
    title:string
}

export function Button({title, ...rest}:ButtonProps){
    return(
        <TouchableOpacity style={style.button} {...rest}>
            <Text style={style.buttonText}>{title}</Text> 
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    button:{
        width: 231,
        height:56,
        backgroundColor:colors.green,
        justifyContent:'center',
        marginTop:40,
        borderRadius:16
    },
    buttonText:{
        textAlign:"center",
        fontFamily:fonts.medium,
        fontSize:17,
        color: colors.white,

    }
})