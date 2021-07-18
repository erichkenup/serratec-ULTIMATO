import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import React from 'react';
import { StatusBar } from 'react-native';

import Home from './screens/home/index'
import Login from './screens/login/index'
import Cadastro from './screens/cadastro/index'
import Adicionar from './screens/adicionar/index'
import Details from './screens/details/index'
// import HeaderTopo from "./components/header/index"


const Stack = createStackNavigator();

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#000" />

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

      
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Home" component={Home}/>       
        <Stack.Screen name="Cadastro" component={Cadastro}/>
        <Stack.Screen name="Adicionar" component={Adicionar}/>
        <Stack.Screen name="Details" component={Details}/>
        {/* <Stack.Screen name="HeaderTopo" component={HeaderTopo}/> */}
       
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
