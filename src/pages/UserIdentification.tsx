import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'
import Constants from 'expo-constants'

// MyComponents
import colors from '../../styles/colors'
import { Button } from '../components/Button'
import fonts from '../../styles/fonts'

export function UserIdentification() {
    const [isFocused, setIsFocused]= useState(false);
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>()

    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value:string){
        setIsFilled(!!value)
        setName(value)
    }
    return (
        <View style={style.container}>
            <View style={style.content}>
                <View style={style.form}>
                    <>
                        <Text style={style.emoji}>😄</Text>
                        <Text style={style.title}>Como podemos {'\n'} chamar você?</Text>
                        <TextInput
                            style={[
                                style.input, 
                                (isFilled || isFocused) && {borderColor: colors.green}

                            ]}
                            placeholder='Digite seu nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}

                        />
                    </>
                        <View style={style.footer}> 
                            <Button activeOpacity={0.7} title='Confirmar'/>
                        </View>
                </View>
            </View>

        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        width: '100%',
        justifyContent: 'space-around',
        alignItems:'center'
    },
    content:{
        flex:1,
        width: '100%'
    },
    form:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:54,
        alignItems:'center'
    },
    emoji:{
        fontSize:44
    },
    title:{
        marginTop:10,
        color: colors.heading,
        fontSize:24,
        fontFamily: fonts.bold,
        textAlign:'center'
    },
    input:{
        borderBottomWidth:1,
        borderColor:colors.gray,
        color: colors.heading,
        width:'100%',
        fontSize:18,
        marginTop:40,
        padding:10,
        textAlign:'center'
    },
    footer:{
        width: '100%',
        paddingHorizontal:20
    }
})
