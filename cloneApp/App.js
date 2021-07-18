
import React from 'react';
import { Button, ImageBackground,View, TouchableHighlight, Text, Image, StyleSheet, TextInput} from 'react-native';
import Icon from "react-native-vector-icons/SimpleLineIcons";
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
// import {creazteBottomNavigator} from "@react-navigation/bottom-tabs"
import Gartic from "./components/Gartic"
import Home from "./components/Home"
import Details from "./components/Details"
import Jogos from "./components/Jogos"


const Stack = createStackNavigator();
// const Tabs = createBottomTabNavigator();

// const Home = ({navigation}) => {
//   return(
//     <View>
//       <Button title="Details" onPress={() => {navigation.navigate("Details")}}/>
//     </View>
//   )
// }

// const Details = ({navigation}) => {
//   return(
//     <View>
//       <Button title="Home" onPress={() => {navigation.navigate("Home")}}/>
//       <Button title="Gartic" onPress={() => {navigation.navigate("Gartic")}}/>
//     </View>
//   )
// }

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Details" component={Details}/> */}
        <Stack.Screen name="Gartic" component={Gartic} options={{ title:"Home"}}/>
        <Stack.Screen name="Jogos" component={Jogos} options={{ title:"Jogos"}}/>

      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;
