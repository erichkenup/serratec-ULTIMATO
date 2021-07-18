import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import React from 'react';
import { StatusBar } from 'react-native';

import Home from './screens/home/index'
import Login from './screens/login/index'
import Cadastro from './screens/cadastro/index'
import Adicionar from './screens/adicionar/index'


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
        
       
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}
