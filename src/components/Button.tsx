import React from "react";
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from "react-native";
import colors from "../../styles/colors";

interface ButtonProps extends TouchableOpacityProps {
    title:string
}

export function Button({title, ...rest}:ButtonProps){
    return(

        <TouchableOpacity 
        style={style.button} 
        activeOpacity={0.5}
        {...rest}
        >
            <Text style={style.buttonText}> {title} </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    buttonText:{
        color:colors.white,
        fontSize:14
    },
    button:{
        backgroundColor:colors.green,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:16,
        marginBottom:10,
        height:56,
        width:56
    },
})