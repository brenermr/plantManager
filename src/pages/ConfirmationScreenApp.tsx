import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";
import { Button } from "../components/Button";

export function ConfirmationScreenApp(){
    return(
        <View style={style.container}>
            <View style={style.content}>
                <Text style={style.emoji}>😄</Text>
                <Text style={style.title}>Prontinho</Text>
                <Text style={style.greetings}>
                    Agora vamos começar a cuidar das suas 
                    {'\n'}
                    plantinhas com muito cuidado. 
                </Text>
                <View style={style.button}>
                    <Button title="Começar" activeOpacity={0.7}/>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',

    },
    content:{
        justifyContent:'space-around',
        alignItems:'center',
        width: '100%',

    },
    emoji:{
        fontSize:RFValue(96)
        
    },
    title:{
        marginTop:86,
        fontSize:RFValue(24),
        fontFamily:fonts.medium,
        color: colors.heading
    },
    greetings:{
        marginTop:16,
        textAlign:"center",
        fontFamily:fonts.regular,
        fontSize:RFValue(17),
        color: colors.heading,

    },
    button:{
        width: '100%',
        paddingHorizontal:70
    }
})