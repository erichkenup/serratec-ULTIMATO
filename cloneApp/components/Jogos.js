
import React,{useState} from 'react';
import { ScrollView,TouchableOpacity, ImageBackground,View, TouchableHighlight, Text, Image, StyleSheet, TextInput} from 'react-native';
// import gartic from './resources/'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import AsyncStorage from "@react-native-community/async-storage"

import Category from "./Category"


const scrollImagens = ["GERAL","OBJETOS","ANIMAIS","ALIMENTOS"]
const imageBackground = { uri: "https://lh3.googleusercontent.com/7aG6w7rTxw4DMLhNTA8O3D0PKvpppxLfuhzV1X-04O9g22oJ4D7vcz3fEXCiGenkTYe6=w500-h280" };
const imageProfile = { uri:"https://64.media.tumblr.com/ad3845414afbfea1ace36a4d950155ba/384167d93a37deba-fa/s1280x1920/7b57e97fc906c835958bfbb80cf06d0245835c75.jpg" }
// const imageGartic = 

const Jogos = ({navigation}) => {
    
    const [nome,setNome]=useState(null)

    const Buscar = async (chave)=>{
        const valor = await AsyncStorage.getItem(chave)
        setNome(valor)
      }

  return (
      <View style={[styles.container, {flexDirection: "column"}]}>
          <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
            <View style={{ flex: 1}}>
                <View style={{ flexDirection: "row", marginTop:20}}>
                    <Icon onPress={() => navigation.goBack()} name="arrow-left" size={30} color="white" style= {{alignItems:"flex-start" ,  marginLeft:10, flex:0.5 }}/>       
                    <Text style={styles.textTitulo}>                    
                        TIPOS DE SALA
                        {Buscar("@storage_key")}
                        {nome}
                    </Text>
                    <View style={{ flex: 0.5}}/>
                </View> 
            
            <View >
                <Text style={styles.textSubtitulo}>
                    ESCOLHA UMA SALA PRA JOGAR:
                </Text>
            </View>
            </View>


        <View style={{flex:2}}>
            <ScrollView scrollEventThrottle={16}>              
                            <View style={{ marginTop: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false} 
                                >
                                    {/* {scrollImagens.map((imagem) =>(
                                    <Category key={imagem} imageUri={require(`../resources/${imagem}.png`)}
                                    name={imagem}
                                    />
                                    ))} */}
                                    
                                    <Category imageUri={require('../resources/GERAL.png')}
                                        name="GERAL"
                                    />
                                    <Category imageUri={require('../resources/OBJETOS.jpg')}
                                        name="OBJETOS"
                                    />
                                    <Category imageUri={require('../resources/ANIMAIS.jpg')}
                                        name="ANIMAIS"
                                    />
                                    <Category imageUri={require('../resources/ALIMENTOS.jpeg')}
                                        name="ALIMENTOS"
                                    />
                                    
                                    
                                </ScrollView>
                            </View>                          
            </ScrollView>
        </View>         

            <View style={{ flex: 0.8}}>            
              <TouchableOpacity style={styles.button} > 
                  <Text style={styles.textButtonJogar}>JOGAR</Text>
              </TouchableOpacity>
              <Text style={styles.textRodape} onPress={() => navigation.goBack()}>
                +VER SALAS PERSONALIZADAS
    
            </Text>
            </View>            
          </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
      flex: 1,
      justifyContent: "center"
    },
    
    profileImg: {
    width: 180,
    height: 180,
    borderColor: 'white',
    borderWidth: 4,
    borderRadius: 100,
    alignSelf: "center"
      
    },

    logoImg: {
      width: 240,
      height: 70,
      alignSelf: "center"
        
      },

    button: {
        backgroundColor: 'yellow',
        borderRadius: 24,
        width: 300,
        alignSelf: "center",
        

    },

    textName:{
      color: "white",
      marginTop: 10,
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      flex:1
            
    },
    textTitulo:{
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        flex:1
              
      },
      textSubtitulo:{
        color: "white",
        fontSize: 18,        
        textAlign: "center"              
      },

      textRodape:{
        color: "white",
        fontSize: 15,        
        textAlign: "center",
        textDecorationLine: 'underline',
        fontWeight: 'bold',
        marginTop: 30
                     
      },

    textButtonJogar:{
      color: "#0059b3",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
      padding: 10    
    }
})



export default Jogos;