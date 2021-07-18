import React, { useRef, useState, useEffect} from 'react';
import { FlatList} from 'react-native';
import {  
    Wrapper, 
    Container, 
    GridFlex, 
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
import HeaderTopo from '../../components/header';


import {  MaterialCommunityIcons } from '@expo/vector-icons'; 


export default function Home({navigation}) {

    const [produtos, setProdutos] = useState([]);
    const [nome, setNome] = useState('');
    const [jojo, setJojo] = useState({})
    
    const modalizeRef = useRef(null); 
    
    useEffect(() => {        
        API()
    }, [])  

    function API (){
        rotas.obterTodos().then((response) =>{
            setProdutos(response.data);
            mostrarNome()           
        }).catch(error => {console.log(error)})
    }
    

    function handleDetails(produtos){
      
        navigation.navigate('Details',produtos);        
    }

    async function mostrarNome(){
        const nomeUsuario = await AsyncStorage.getItem("nome")
        setNome( nomeUsuario)        
    }

    const handleEdit = (item) => {
        modalizeRef.current?.open();
        setJojo(item)
        
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
               <HeaderTopo navigation={navigation} nome={nome}/>
                <Container>
                <Topo />
                </Container>
                
                <GridFlex>
                    <FlatList
                    data={produtos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) =>
                    
                        <ContainerBanner onPress={()=>handleDetails(item)}>
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

                
            
            <Button atualizarHome={API} />
        </Wrapper>     
        <ModalizeDefault modalizeRef={modalizeRef} jojo={jojo} atualizarHome={API}/>
      </>
    )
}