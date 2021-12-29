import React from "react";
import { Header } from "../../components/Header";
import {Container, Title, SecondaryTitle } from "./style";

export function PlantSelect(){
    return(
        <Container>
            <Header/>
            <Title>
                Em qual ambiente
            </Title>
            <SecondaryTitle>
                Você quer colocar sua planta?
            </SecondaryTitle>
        </Container>
    )
}