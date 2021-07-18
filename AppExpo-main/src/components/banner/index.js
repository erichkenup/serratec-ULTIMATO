import React from 'react';

import {
  Container,
  Header,
  Title,
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
} from './styles';

import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import pijama1 from '../../images/pijama1.png';





export default function Banner(props) {
  


  return (

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
                <MaterialCommunityIcons onPress={handleEdit} name="square-edit-outline" size={24} color="#fff" />
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
    )
    }