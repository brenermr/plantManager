import React from "react";
import { Container, Grettings, Image, Infos, Name } from "./style";


export function Header(){
    return(
        <Container>
            <Infos>
                <Grettings>
                    Olá,
                </Grettings>
                <Name>
                    Caique
                </Name>
            </Infos>
            <Image source={{uri:'https://github.com/brenermr.png'}}/>
        </Container>
    )
}