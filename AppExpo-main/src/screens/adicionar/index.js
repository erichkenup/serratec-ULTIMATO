import React, { useState } from 'react';
import { Wrapper, Container, BalanceContainer, Balance, Header, Formulario } from '../home/styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import img from '../../images/logo.png'

export default function Adicionar({navigation}) {

    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const [valor, onChangeValor] = React.useState(null);
    const [descrisao, onChangeDescrisao] = React.useState("");
    

    function handleLogout(){
        //await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }

    function handleHome(){
        navigation.navigate('Home');        
    }


        return(
            <Wrapper>
             <Container>
             <Header>
                <TouchableOpacity>
                    <Ionicons name="md-person-circle-sharp" size={30} color="#c3b087" />
                </TouchableOpacity> 
               
                <BalanceContainer>
                    <TouchableOpacity onPress={handleHome}>
                    <Balance source={img}/>
                    </TouchableOpacity>
                </BalanceContainer>
               
                <TouchableOpacity onPress={handleLogout}>
                    <MaterialIcons name="logout" size={30} color="#c3b087" />
                </TouchableOpacity> 
                </Header>
                
                <Formulario onChangeText={onChangeText} value={text} placeholder=" Nome do produto" /> 
                <Formulario onChangeText={onChangeNumber} value={number} placeholder=" Quantidade do produto" /> 
                <Formulario onChangeText={onChangeValor} value={valor} placeholder=" Valor de venda"/> 
                <Formulario onChangeText={onChangeDescrisao} value={descrisao} placeholder=" Descrisão do produto"/> 


            </Container> 
            </Wrapper>

        )
}