import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import Constants  from 'expo-constants'


export const Container = styled.View`
    width:100%;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    padding: ${RFValue(20)}px;
    margin-top:${Constants.statusBarHeight}px;
`
export const Infos = styled.View`

`
export const Grettings = styled.Text`
    font-size:${RFValue(32)}px;
    color:${({theme})=>theme.colors.heading};
    font-family:${({theme})=>theme.fonts.regular}

`
export const Name = styled.Text`
font-size:${RFValue(32)}px;
    color:${({theme})=>theme.colors.heading};
    font-family:${({theme})=>theme.fonts.bold}

`
export const Image  = styled.Image`
    width:${RFValue(50)}px;
    height:${RFValue(50)}px;
    border-radius:100px;
`


