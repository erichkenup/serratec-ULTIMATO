import React from 'react';
import { BalanceContainer, Balance, Header, Perfil, Logout, BalanceName } from '../header/styles';
import { TouchableOpacity } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import img from '../../images/logo.png'

export default function HeaderTopo({navigation, nome}){

    async function handleLogout(){
        await AsyncStorage.multiRemove(["token","nome"])
        navigation.navigate('Login');        
    }

    function handleHome(){
        navigation.navigate('Home');        
       }

return (
        <Header>
        <Perfil>
            <Ionicons name="md-person-circle-sharp" size={30} color="#c3b087" style={{marginLeft: 10}} />
            <BalanceName >{nome}</BalanceName>
        </Perfil> 

        <BalanceContainer> 
            <TouchableOpacity onPress={handleHome}>
            <Balance source={img}/>
            </TouchableOpacity>
        </BalanceContainer>

        <Logout onPress={handleLogout}>
            <MaterialIcons name="logout" size={30} color="#c3b087" />
        </Logout> 

        </Header>
)
}