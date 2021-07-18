import React,{useState} from 'react';
import { View, Text, Dimensions, Image, TextInput, TouchableOpacity} from 'react-native';
import { Modalize } from 'react-native-modalize';
import { Formulario } from './styles';
import rotas from "../../routes/Produto/routes"


const {wight, height} = Dimensions.get("screen")

export default ModalizeAdicionar = ({ modalizeRef,atualizarHome }) => {

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [preco,setPreco] = useState();
    const [quantidade,setQuantidade] = useState();
    const [linkImagem,setLinkImagem] = useState();

    async function adicionar(){
        console.log(nome)
        const produto ={
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            linkImagem: linkImagem,
            
    }
      await  rotas.cadastrar(produto)
      atualizarHome()
      modalizeRef.current?.close();

    }

  return (

    
    

         <Modalize style={{paddingHorizontal:200 }}  
                ref={modalizeRef}
                HeaderComponent={
                    <Text style={{fontSize:20, fontWeight: 'bold', marginVertical:20, textAlign:"center", marginBottom:20}}>
                        diferentão
                    </Text>
                }
                modalHeight={height/1.2}
                snapPoint={height/2}                
          >
            <View > 
            {/* <TextInput
            placeholder="Nome do item"            
            secureTextEntry={true}
            />       
            

            <TextInput
            placeholder="text2"            
            secureTextEntry={true}
            />     

             <TextInput
            placeholder="text3"            
            secureTextEntry={true}
            />   */}

            <Formulario 
             placeholder=" Nome do produto" 
             onChangeText={(valor) => setNome(valor)}
             /> 

            <Formulario  
            placeholder=" Quantidade do produto" 
            onChangeText={(valor) => setDescricao(valor)}
            />
             
            <Formulario 
            placeholder=" Valor de venda"
            onChangeText={(valor) => setPreco(valor)}
            /> 

            <Formulario 
            placeholder=" Descrição do produto"
            onChangeText={(valor) => setQuantidade(valor)}
            /> 

            <Formulario 
            placeholder=" Link da imagem"
            onChangeText={(valor) => setLinkImagem(valor)}
            /> 
{/* 
            <Descricaocoms> */}
            <TouchableOpacity onPress={adicionar} >
                <Text>
                Adicionar
                </Text>
            </TouchableOpacity>
            {/* </Descricaocoms> */}

            </View>
        </Modalize> 
        
  )
};
