import React from "react";
import {Text, View, StyleSheet, Image} from 'react-native'
import Constants from 'expo-constants'


import { Button } from "../components/Button";
import colors from "../../styles/colors";
import watering from '../assets/watering.png' 

export function Welcome(){
    return(
        <View style={style.container}> 
            <Text style={style.title}>
             Gerencie {'\n'}
             suas plantas {'\n'}
             de forma fácil</Text>
            <Image source={watering} style={style.image}/>
            <Text style={style.subtitle}>Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você sempre que precisar.</Text>
            <Button title="Avançar"/>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-between',
        marginTop: Constants.statusBarHeight
    },
    title:{
        marginTop:40,
        fontSize:32,
        fontWeight: 'bold',
        textAlign:"center",
        color: colors.heading
    },
    subtitle:{
        textAlign:'center',
        fontSize:18,
        paddingHorizontal:30,
        color: colors.heading
    },
    image:{
        width:293, 
        height:285
    },

})
