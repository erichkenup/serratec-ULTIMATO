import "react-native-gesture-handler";
import React, {useState, useEffect, useRef} from 'react';
import { View, TouchableOpacity, Alert } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import rotas from "../../routes/Usuario/routes"
import { Warp, Paragrafo, Loguinho, Icone} from './styles';
import img from '../../images/logo.png'

export default function Login ({navigation}) {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [token,setToken] = useState();
    const [nome,setNome] = useState();

    useEffect(() => {
      AsyncStorage.getItem('token').then(response => {
        if (response != null) {
          navigation.navigate("Home");
        }
      })
    }, [])

    async function salvarUsuarioETokenAsyncStorage(nome,token){
      await AsyncStorage.setItem('nome', nome); 
      await AsyncStorage.setItem('token', token);
                  
 }

 function handleLogin(){     
   
   const usuario = {
     username: email,
     senha: senha,
   }
   rotas.login(usuario).then((response)=>{        
       const tokenInside = response.data.token
       const nomeInside = response.data.usuario.nome

       setToken(tokenInside)
       setNome(nomeInside)
       salvarUsuarioETokenAsyncStorage(nomeInside, tokenInside)
       
       navigation.navigate('Home') 
        

   }).catch(error => {Alert.alert("Usuario ou senha invalidos")})

   // salvarUsuarioNoAsyncStorage(usuario);
     
 }

    
  return (
    <Warp>
      <Loguinho source={img} />
      <Text > Bem vindo! </Text>
      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}  onChangeText={(valor) => setEmail(valor)} />
      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        secureTextEntry={true} onChangeText={(senhaChave) => setSenha(senhaChave)}
      />

      <Button onPress={handleLogin} title="Logar" type="clear"
        icon={
          <Icone name="arrow-right" size={20} color="white" />
             }
        title="Entrar"
      />

      <View>
        <TouchableOpacity>
          <Paragrafo>
            Não tem uma conta?
            clique aqui para Cadastrar
          </Paragrafo>
        </TouchableOpacity>
      </View>
    </Warp>
  );
}

