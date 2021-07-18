import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Input, Text, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { useFonts } from "expo-font";

export default function Cadastro({navigation}) {

    function handleLogin(){
        navigation.navigate('Login');        
    }

 /* let [fontsLoaded] = useFonts({
    "Nunito-Light": require("./src/fonts/fonts/Nunito-Light.ttf"),
    "Nunito-Bold": require("./src/fonts/fonts/Nunito-Bold.ttf"),
    "Nunito-Black": require("./src/fonts/fonts/Nunito-Black.ttf"),
    "Nunito-Regular": require("./src/fonts/fonts/Nunito-Regular.ttf"),
  });*/
  return (
    <View style={styles.container}>
      <Image style={styles.Logo} source={require("../../images/logo.png")} />
      <Text h3 style={styles.titulo}>
        {" "}
        Crie sua conta{" "}
      </Text>
      <Input
        placeholder="Nome"
        leftIcon={{ type: "font-awesome", name: "user" }}
        style={styles}
      />
      <Input
        placeholder="Email"
        leftIcon={{ type: "font-awesome", name: "envelope" }}
        style={styles}
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: "font-awesome", name: "lock" }}
        style={styles}
        secureTextEntry={true}
      />
      <Button onPress={handleLogin}
        type="clear"
        icon={
          <Icon
            name="arrow-right"
            size={20}
            color="white"
            style={styles.icon}
          />
        }
        title="Cadastrar"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#bdc3c7",
    flex: 1,
    // backgroundColor: "#e9ecef",
    alignItems: "center",
    justifyContent: "center",
  },
  Logo: {
    width: 200,
    height: 100,
  },
  // p: {
  //   textAlign: "center",
  //   paddingTop: 20,
  // },
  icon: {
    color: "green",
  },
  titulo: {
    fontFamily: "Nunito-Regular",
  },
});
