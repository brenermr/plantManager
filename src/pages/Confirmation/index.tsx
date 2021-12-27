import React from "react";
import { Button } from "../../components/Button/";
import { ButtonBox, Container, Content, Emoji, Grettings, Title } from "./style";

export function ConfirmationScreenApp(){
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
                    <Button title="Começar" activeOpacity={0.7}/>
                </ButtonBox>
            </Content>
        </Container>
    )
}

