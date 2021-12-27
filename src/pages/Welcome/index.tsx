import React from "react";
// My Components
import { Button, Container, Icon, Imagem, SubTitle, Title } from "./style";
import watering from '../../assets/watering.png'
import { useNavigation } from "@react-navigation/native";

export function Welcome(){
    const navigation = useNavigation()
    function handleStart(){
        navigation.navigate('UserIdentification')
    }
    return(
        <Container>
            <Title>
            Gerencie {'\n'}
            suas plantas 
            de {'\n'} forma fácil
            </Title>
            <Imagem source={watering} resizeMode="contain"/>
            <SubTitle>
            Não esqueça mais de regar suas {'\n'} plantas. 
            Nós cuidamos de lembrar você {'\n'} sempre que precisar.
            </SubTitle>
            <Button activeOpacity={0.5} onPress={handleStart}>
                <Icon name="right"/>
            </Button>
        </Container>
    )
}