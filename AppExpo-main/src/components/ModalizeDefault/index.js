import React,{useEffect,useState} from 'react';
import { View, Text, Dimensions, Image, TextInput,TouchableOpacity} from 'react-native';
import { RotationGestureHandler } from 'react-native-gesture-handler';
import { Modalize } from 'react-native-modalize';
import rotas from "../../routes/Produto/routes"
import { Formulario } from './styles';


const {wight, height} = Dimensions.get("screen")

export default ModalizeDefault = ({ modalizeRef,jojo, atualizarHome }) => {

    const [nome, setNome] = useState();
    const [descricao, setDescricao] = useState();
    const [preco,setPreco] = useState();
    const [quantidade,setQuantidade] = useState();
    const [linkImagem,setLinkImagem] = useState();   

    async function atualizar(){
        const produto ={ 
            nome: nome,
            descricao: descricao,
            preco: preco,
            quantidade: quantidade,
            linkImagem: linkImagem,            
    }
    console.log(produto)
      await  rotas.atualizar(jojo.id,produto)
      atualizarHome()
      modalizeRef.current?.close();
    }
  
  let pre = ""
  let qtde = ""

  // let pre = jojo.preco.toString()
  // let qtde = jojo.quantidade.toString()

  // useEffect(()=>{
  //    pre = jojo.preco.toString()
  //    qtde = jojo.quantidade.toString()
  // })
  
  return (
  
  
         <Modalize style={{paddingHorizontal:200}}  
                ref={modalizeRef}
                HeaderComponent={
                    <Text style={{fontSize:20, fontWeight: 'bold', marginVertical:20, textAlign:"center", marginBottom:20}}>
                        {jojo.nome}
                    </Text>
                }
                modalHeight={height/1.2}
                snapPoint={height/2}                
          >
            <View > 
    
            <Formulario
            defaultValue={jojo.nome}
            placeholder="Nome do item"
            onChangeText={setNome}            
            
            />             

            <Formulario
            defaultValue={jojo.descricao}
            placeholder="Descrição"  
            onChangeText={(valor) => setDescricao(valor)}          
            
            />     

            <Formulario
            // defaultValue={pre}
            value={preco}
            placeholder="Preço"    
            onChangeText={setPreco}        
            
            />  

            <Formulario
            defaultValue={qtde}
            placeholder="Quantidade"      
            onChangeText={(valor) => setQuantidade(valor)}      
            
            />  

            <Formulario
            defaultValue={jojo.linkImagem}
            placeholder="Link Imagem"
            onChangeText={(valor) => setLinkImagem(valor)}
                        
            
            />      

            <TouchableOpacity onPress={atualizar} >
                <Text>
                Atualizar
                </Text>
            </TouchableOpacity>

            </View>
        </Modalize> 
        
  )
};

// "nome": "Mouse RGB 3",
//     "descricao": "Mouse RGB",
//     "preco": 162.99,
//     "quantidade": 0,
//     "linkImagem"