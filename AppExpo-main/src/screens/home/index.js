import React, { useRef, useState, useEffect} from 'react';
import { TouchableOpacity,FlatList,Text } from 'react-native';
import {  
    Wrapper, 
    Header, 
    BalanceContainer,
    Container, 
    Balance, 
    GridFlex, 
    BalanceName,   
    Card,
    CardHeader,
    Avatar,
    CardBody,
    UserName,
    CardFooter,
    Details,
    Value,
    Divider,
    Descricao,
    ContainerBanner,
 } from './styles';
    
import Topo from '../../components/topo/index';
import Button from '../../components/button/index'
import AsyncStorage from '@react-native-async-storage/async-storage';
import ModalizeDefault from "../../components/ModalizeDefault/index";
import rotas from "../../routes/Produto/routes";


import { Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 

import img from '../../images/logo.png'


export default function Home({navigation}) {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [jojo, setJojo] = useState({})
    
    const modalizeRef = useRef(null); 
    
    useEffect(() => {        
        rotas.obterTodos().then((response) =>{
            setProdutos(response.data);
            mostrarNome()
            
        }).catch(error => {console.log(error)})
    }, [])  
    
    async function handleLogout(){
        await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }

    async function mostrarNome(){
        const nomeUsuario = await AsyncStorage.getItem("nome")
        setNome( nomeUsuario)        
    }

    const handleEdit = (item) => {
        modalizeRef.current?.open();
        setJojo(item)
        console.log(jojo)
        
    }

    const handleDelete = (item) => {
        rotas.deletar(item.id) 
        var index = produtos.indexOf(item) 
        
        var produtoNovo = produtos.filter(function(value){ 
            return value.id !== produtos[index].id})

        setProdutos(produtoNovo)
        
    }

    return (
        <>
        <Wrapper>       
               <Header >
                <TouchableOpacity style={{ flex:1}}>
                    <Ionicons style={{marginLeft:10}} name="md-person-circle-sharp" size={30} color="#c3b087" />
                    <BalanceName >{nome}</BalanceName>
                </TouchableOpacity> 
                
               
                <BalanceContainer  style={{ flex:1, alignItems:"center"}}>
                    <TouchableOpacity>
                    <Balance source={img}/>
                    </TouchableOpacity>
                </BalanceContainer>
               
                <TouchableOpacity onPress={handleLogout} style={{ flex:1, alignItems:"flex-end" }}>
                    <MaterialIcons name="logout" size={30} color="#c3b087" />
                </TouchableOpacity> 
                </Header>
                <Container>
                <Topo />
                </Container>
                
                <GridFlex>
                    <FlatList
                    data={produtos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                    
                        <ContainerBanner>
                          <Card>
                            <CardHeader>
                              <Avatar source={{uri: item.linkImagem}} />
                            </CardHeader>  
                                <CardBody>
                                    <UserName>{item.nome}</UserName>
                                </CardBody>
                            <CardFooter>
                              <Details>
                                <Value>R$ {item.preco}</Value>
                                <Divider />                                
                                <Descricao>
                                <MaterialCommunityIcons onPress={() =>handleEdit(item)} name="square-edit-outline" size={24} color="#fff" />
                                </Descricao>
                                <Descricao>
                                <MaterialCommunityIcons onPress={() => handleDelete(item)} name="delete" size={24} color="#fff" />
                                </Descricao>
                              </Details>
                            </CardFooter>
                          </Card>
                        </ContainerBanner>
                    
                        }
                    /> 
                </GridFlex>     

                
            
            <Button />
        </Wrapper>     
        <ModalizeDefault modalizeRef={modalizeRef} jojo={jojo}/>
      </>
    )
}