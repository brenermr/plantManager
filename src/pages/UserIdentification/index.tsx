import React, { useState } from 'react'
import { 
    Platform 
} from 'react-native'
import Constants from 'expo-constants'
import { RFValue } from 'react-native-responsive-fontsize'

// MyComponents
import { Button } from '../../components/Button/'
import colors from '../../../styles/colors'
import { useNavigation } from '@react-navigation/native'
import { Container, Content, Emoji, Footer, Form, Input, KeyBoardView, Title } from './styles'

export function UserIdentification() {
    const navigation = useNavigation()
    const [isFocused, setIsFocused]= useState(false);
    const [isFilled, setIsFilled] = useState(false)
    const [name, setName] = useState<string>('')

    function handleInputBlur(){
        setIsFocused(false)
        setIsFilled(!!name);
    }
    function handleInputFocus(){
        setIsFocused(true)
    }
    function handleInputChange(value:string){
        setIsFilled(!!value)
        setName(value)
    }
    function handleStart(){
        isFilled != false ? navigation.navigate('Confirmation'): alert('Nome não pode ser vazio')
    }
    return (
        <Container>
            <KeyBoardView  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Content>
                <Form>
                    <>
                        <Emoji>
                            {isFilled ? '😄': '😭' } 
                        </Emoji>
                        <Title >Como podemos {'\n'} chamar você?</Title>
                        <Input
                            style={
                                (isFilled || isFocused) && {borderColor: colors.green}

                            }
                            placeholder='Digite seu nome'
                            onBlur={handleInputBlur}
                            onFocus={handleInputFocus}
                            onChangeText={handleInputChange}

                        />
                    </>
                        <Footer> 
                            <Button activeOpacity={0.7} title='Confirmar' onPress={handleStart}/>
                        </Footer>
                </Form>
            </Content>
            </KeyBoardView>

        </Container>
    )
}

