import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
`
export const Content = styled.View`
    padding: 0 ${RFValue(20)}px ;
`

export const Title = styled.Text`
    font-size:${RFValue(17)}px;
    color: ${({theme})=>theme.colors.heading};
    font-family: ${({theme})=>theme.fonts.medium};
    margin-top:15px;
    line-height: ${RFValue(20)}px;
`

export const SecondaryTitle = styled.Text`
    font-size:${RFValue(17)}px;
    color: ${({theme})=>theme.colors.heading};
    font-family: ${({theme})=>theme.fonts.regular};
    margin-top:15px;
    line-height: ${RFValue(20)}px
`