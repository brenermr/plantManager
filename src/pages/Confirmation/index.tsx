import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button } from "../../components/Button/";
import { ButtonBox, Container, Content, Emoji, Grettings, Title } from "./style";

export function ConfirmationScreenApp(){
    const navigation = useNavigation()
    function handleStart(){
        navigation.navigate('PlantSelect')
    }
    return(
        <Container>
            <Content>
                <Emoji>😄</Emoji>
                <Title>Prontinho</Title>
                <Grettings>
                    Agora vamos começar a cuidar das suas 
                    {'\n'}
                    plantinhas com muito cuidado. 
                </Grettings>
                <ButtonBox >
                    <Button onPress={handleStart} title="Começar" activeOpacity={0.7}/>
                </ButtonBox>
            </Content>
        </Container>
    )
}

