import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ButtonBox = styled.TouchableOpacity`
    height: ${RFValue(56)}px;
    background-color: ${({theme})=>theme.colors.green};
    justify-content: center;
    margin-top: 40px;
    border-radius: 16px;
    align-items: center;
`
export const TextButton = styled.Text`
    text-align: center;
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(17)}px;
    color: ${({theme})=>theme.colors.white};
`