import React from "react";
import {
    Text, 
    View, 
    StyleSheet, 
    Image, 
    TouchableOpacity,
    Dimensions
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import Constants from 'expo-constants'
import { RFValue } from "react-native-responsive-fontsize";

// My Components
import colors from "../../styles/colors";
import watering from '../assets/watering.png'
import fonts from "../../styles/fonts";
import { useNavigation } from "@react-navigation/native";

export function Welcome(){
    const navigation = useNavigation()
    function handleStart(){
        navigation.navigate('UserIdentification')
    }
    return(
        <View style={style.container}> 
            <Text style={style.title}>
                Gerencie {'\n'}
                suas plantas 
                de {'\n'} forma fácil
             </Text>
            <Image source={watering} style={style.image} resizeMode="contain"/>
            <Text style={style.subtitle}>
                Não esqueça mais de regar suas {'\n'} plantas. 
                Nós cuidamos de lembrar você {'\n'} sempre que precisar.
            </Text>
            <TouchableOpacity style={style.button} activeOpacity={0.5} onPress={handleStart}>
                 <AntDesign name="right" size={32} color="#FFF" />            
            </TouchableOpacity>
        </View>
    )
}


const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'space-around',
        marginTop: Constants.statusBarHeight,
    },
    title:{
        fontSize:RFValue(38),
        textAlign:"center",
        color: colors.heading,
        fontFamily: fonts.bold
    },
    subtitle:{
        textAlign:'center',
        fontSize:RFValue(17),
        paddingHorizontal:30,
        color: colors.heading,
        fontFamily: fonts.regular
    },
    image:{
        height:Dimensions.get('window').width * 0.7
    },
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
        height:RFValue(56),
        width:RFValue(56)
    },

})
