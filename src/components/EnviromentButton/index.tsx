import React from 'react'
import { ButtonRect, ButtonRectActive, Title, TitleActive } from './style'
import { RectButtonProps } from 'react-native-gesture-handler'

interface ButtonProps extends RectButtonProps{
    title:string;
    active?:boolean;
}

export function EnviromentButton({title, active=false, ...rest}: ButtonProps){
if(active===false){
    return(
        <ButtonRect {...rest} >  
            <Title>
                {title}
            </Title>
        </ButtonRect>
    )
}else{
    return(
    <ButtonRectActive {...rest}>
        <TitleActive>
            {title}
        </TitleActive>
    </ButtonRectActive>
    )
}
}