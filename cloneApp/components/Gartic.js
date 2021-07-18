
import React, {useState} from 'react';
import { TouchableOpacity, ImageBackground,View, TouchableHighlight, Text, Image, StyleSheet, TextInput} from 'react-native';
// import gartic from './resources/'
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import AsyncStorage from "@react-native-community/async-storage"



const imageBackground = { uri: "https://lh3.googleusercontent.com/7aG6w7rTxw4DMLhNTA8O3D0PKvpppxLfuhzV1X-04O9g22oJ4D7vcz3fEXCiGenkTYe6=w500-h280" };
const imageProfile = { uri:"https://64.media.tumblr.com/ad3845414afbfea1ace36a4d950155ba/384167d93a37deba-fa/s1280x1920/7b57e97fc906c835958bfbb80cf06d0245835c75.jpg" }
// const imageGartic = 

const Gartic = ({navigation}) => {

  const [nome,setNome]=useState(null)
  const [nomeInput,setNomeInput]=useState("Quem é você")

  const Armazenar= (chave, valor) =>{
    AsyncStorage.setItem(chave, valor)
  }

  const Buscar = async (chave)=>{
    const valor = await AsyncStorage.getItem(chave)
    setNome(valor)
  }

  return (
      <View style={[styles.container, {flexDirection: "column"}]}>
          <ImageBackground source={imageBackground} resizeMode="cover" style={styles.image}>
            <View style={{ flexDirection: "row", marginTop:20}}>
            <Icon name="settings" size={30} color="white" style= {{alignItems:"flex-start" ,  marginLeft:10, flex:1}}/>
              <Icon name="trophy" size={30} color="white" style= {{alignItems: "flex-end", marginRight:10}}/>              

              {/* <View syle={{flexDirection:"row"}}>
                <View style={{flex:1}}>
                  <Text>112312312</Text>
                </View>
                <View style={{flex:1}}>
                <Text>1</Text>
                </View>
              </View> */}
            </View>

            {/* <View style={{ flex: 0.2}}>

            </View> */}

            <View style={{ flex: 1}}>
              <Image source ={require("../resources/gartic.png")} style={styles.logoImg} resizeMode={"cover"}/>
            </View>
            <View style={{ flex: 1.2}}>
              <Image source={imageProfile } style={styles.profileImg} resizeMode={"cover"}/>
            </View>
            <View style={{ flex: 1}}>
              <TextInput
                style={styles.caixa} 
                placeholder="Quem é você?"  
                onChangeText={(text)=>setNomeInput(text)}
                autoCapitalize="characters"
                
              />
              <Text style={styles.textName}>ERICH</Text>
            </View>
            <View style={{ flex: 1}}>
            {/* onPress={() => {navigation.navigate("Home")}} */}
              <TouchableOpacity style={styles.button} onPress= {() => {navigation.navigate("Jogos"),Armazenar("@storage_key", nomeInput)}} > 
                  <Text style={styles.textButtonJogar}>JOGAR</Text>
              </TouchableOpacity>
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
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",      
    },

    textButtonJogar:{
      color: "#0059b3",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 20,
      padding: 10    
    },

    caixa:{
      borderBottomWidth:1,
      borderBottomColor:"white",
      marginHorizontal:50
  }
})



export default Gartic;
