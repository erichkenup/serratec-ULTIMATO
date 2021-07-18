import React from 'react';
import {Dimensions} from "react-native"
import {  
    Wrapper, 
    Detalhes,
    Img,
    Footer,
} from './styles';

 import AsyncStorage from '@react-native-async-storage/async-storage';
 import HeaderTopo from '../../components/header';

 const {width, height} = Dimensions.get("screen")

export default function Details({navigation, route, nome}) {
    const produtos = route.params

    return(

    <Wrapper>
        <HeaderTopo navigation={navigation} nome={nome}/>
            <Img source={{uri: produtos.linkImagem}} style={{height:height/2.5 ,width:width/2.5}}/>
            <Detalhes>{produtos.nome}</Detalhes>
            <Detalhes>{produtos.preco}</Detalhes>
            <Detalhes>{produtos.descricao}</Detalhes>
            <Detalhes>{produtos.quantidade}</Detalhes>

          <Footer />  
     </Wrapper>
)   

}
