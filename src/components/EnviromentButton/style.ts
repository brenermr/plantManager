import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const ButtonRect = styled(RectButton)`
    background-color: ${({theme})=>theme.colors.shape};
    height:${RFValue(40)}px;
    width:${RFValue(76)}px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 0 10px;

`

export const Title = styled.Text`
    color:${({theme})=>theme.colors.heading};
    font-family: ${({theme})=>theme.fonts.regular};
`

export const ButtonRectActive = styled(RectButton)`
    background-color: ${({theme})=>theme.colors.green_light};
    height:${RFValue(40)}px;
    width:${RFValue(76)}px;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    margin: 0 10px;
`

export const TitleActive = styled.Text`
    color:${({theme})=>theme.colors.green_dark};
    font-family: ${({theme})=>theme.fonts.bold};
`
