import React, { useEffect, useState } from "react";
import { FlatListProps } from "react-native";
import { EnviromentButton } from "../../components/EnviromentButton";
import { Header } from "../../components/Header";
import api from "../../services/api";
import {Container, Title, SecondaryTitle, Content, List, FlatList} from "./style";

interface EnviromentProps{
    key:string;
    title:string
}


export function PlantSelect(){
    const [enviroments, setEnviroments] = useState<EnviromentProps[]>([])
    useEffect(()=>{
        async function fecthEnviroment() {
            const {data} = await api.get('plants_environments')
                setEnviroments([
                    {
                        key:'all',
                        title:'Todos',
                    },
                    ...data
                ]);
        }
        fecthEnviroment();
    },[])
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
                data={enviroments}
                keyExtractor={item=>item.key}
                renderItem={({item})=>(

                    <EnviromentButton 
                    active={true} title={item.title}/>
                )}
                />
            </List>
        </Container>
    )
}