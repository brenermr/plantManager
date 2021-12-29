import React from "react";
import { EnviromentButton } from "../../components/EnviromentButton";
import { Header } from "../../components/Header";
import {Container, Title, SecondaryTitle, Content, List, FlatList } from "./style";

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
            <List>
                <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={[1,2,3,4,5]}
                keyExtractor={item=>item}
                renderItem={({item})=>(

                    <EnviromentButton 
                    active={true} title="Quarto"/>
                )}
                />
            </List>
        </Container>
    )
}