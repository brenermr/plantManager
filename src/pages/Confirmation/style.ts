import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
`
export const Content = styled.View`
    justify-content: space-around;
    align-items: center;
    width: 100%;
`
export const Emoji = styled.Text`
    font-size: ${RFValue(96)}px;
`
export const Title = styled.Text`
    margin-top: 86px;
    font-size: ${RFValue(24)}px;
    font-family: ${({theme})=>theme.fonts.medium};
    color: ${({theme})=>theme.colors.heading};
`
export const Grettings = styled.Text`
    margin-top: 16px;
    text-align: center;
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(17)}px;
    color:${({theme})=>theme.colors.heading};

`
export const ButtonBox = styled.View`
    width: 100%;
    padding: 0 ${RFValue(70)}px;
`