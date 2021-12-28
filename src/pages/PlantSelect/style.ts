import styled from "styled-components/native"
import Constants  from "expo-constants"
import { RFValue } from "react-native-responsive-fontsize"

export const Container = styled.View`
    flex:1;
    background-color: ${({theme})=>theme.colors.background};
`
