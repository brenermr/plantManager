import React from "react";
import {TouchableOpacityProps} from 'react-native'
import {ButtonBox, TextButton} from './style'

interface ButtonProps extends TouchableOpacityProps{
    title:string
}

export function Button({title, ...rest}:ButtonProps){
    return(
        <ButtonBox {...rest}>
            <TextButton>
                {title}
            </TextButton>    
        </ButtonBox>
    )
}
