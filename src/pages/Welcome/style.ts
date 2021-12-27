import styled from "styled-components/native";
import Constants  from "expo-constants";
import { RFValue } from "react-native-responsive-fontsize";
import {Dimensions}  from "react-native";
import { AntDesign } from '@expo/vector-icons';


export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: space-around;
    margin-top: ${Constants.statusBarHeight}px;
`  

export const Title = styled.Text`
    font-size: ${RFValue(38)}px;
    text-align: center;
    color: ${({theme})=>theme.colors.heading};
    font-family: ${({theme})=>theme.fonts.bold};
`
export const Imagem = styled.Image`
    height:${Dimensions.get('window').width * 0.7}px;
`
export const SubTitle = styled.Text`
    text-align: center;
    font-size: ${RFValue(17)}px;
    padding: 0px 30px;
    color: ${({theme})=>theme.colors.heading};
    font-family: ${({theme})=>theme.fonts.regular};
`
export const Button = styled.TouchableOpacity.attrs({
    activeOpacity:0.5,

})`
    background-color: ${({theme})=>theme.colors.green};
    justify-content: center;
    align-items: center;
    border-radius: 16px;
    margin-bottom: 10px;
    height: ${RFValue(56)}px;
    width: ${RFValue(56)}px;
`
export const Icon = styled(AntDesign)`
    font-size: ${RFValue(32)}px;
    color: ${({theme})=>theme.colors.white};
`