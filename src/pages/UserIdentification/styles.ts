import styled from "styled-components/native";
import Constants from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    margin-top: ${Constants.statusBarHeight}px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
`
export const Content = styled.View`
    flex:1;
    width: 100%;
`
export const KeyBoardView = styled.KeyboardAvoidingView`
    flex:1;
    width: 100%;    
`
export const Form = styled.View`
    flex:1;
    justify-content: center;
    padding: 0 54px;
    align-items: center;
`
export const Emoji = styled.Text`
    font-size: ${RFValue(44)}px;
`

export const Title = styled.Text`
    margin-top: 10px;
    color: ${({theme})=>theme.colors.heading};
    font-size: ${RFValue(24)}px;
    font-family: ${({theme})=>theme.fonts.bold};
    text-align:center;
`
export const Input = styled.TextInput`
    border-bottom-width: 1px;
    border-color: ${({theme})=>theme.colors.gray};
    color: ${({theme})=>theme.colors.heading};
    width: 100%;
    font-size: ${RFValue(18)}px;
    margin-top: 40px;
    padding: 10px;
    text-align: center;
`
export const Footer = styled.View`
    width: 100%;
    padding: 0 20px;
`