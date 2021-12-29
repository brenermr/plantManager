import React from "react";
import { Header } from "../../components/Header";
import {Container, Title, SecondaryTitle, Content } from "./style";

export function PlantSelect(){
    return(
        <Container>
            <Content>
                <Header/>
                <Title>
                    Em qual ambiente
                </Title>
                <SecondaryTitle>
                    Você quer colocar sua planta?
                </SecondaryTitle>
            </Content>
        </Container>
    )
}