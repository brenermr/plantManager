import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize"
import React from 'react'
export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
`
export const Content = styled.View`
    padding: 0 ${RFValue(30)}px ;
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
    line-height: ${RFValue(20)}px;
`
export const List = styled.View`
`

export const FlatList = styled.FlatList.attrs({
    contentContainerStyle:{
            height:RFValue(40),
            justifyContent:'center',
            paddingBottom:5,
            marginLeft:32,
            marginVertical:32,
    }
})``